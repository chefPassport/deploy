import React, { useState } from "react";
import { connect } from 'react-redux'
import { getChefRecipes } from '../../actions/chefActions';
import axiosWithAuth from '../../utils/axiosWithAuth';
//material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

const EditForm = ({recipe, chefId, getChefRecipes, handleClose}) => {
  const classes = useStyles();
  const [ editRecipe, setEditRecipe ] = useState({
    id: recipe.id,
    recipe_title: recipe.recipe_title,
    image: recipe.image,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    meal_type: recipe.meal_type,
    chef_id: chefId   
  });
  const handleChanges = (e) => {
    setEditRecipe({
      ...editRecipe,
      [e.target.id]: e.target.value
    });
  }; 
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('FROM THE EDIT FORM')
    axiosWithAuth()
        .put(`https://simmr.herokuapp.com/api/chefs/${chefId}/recipes/${editRecipe.id}`, editRecipe)
        .then(res => {
            console.log('Recipe was edited', res)
            getChefRecipes(chefId);
            handleClose();
        })
        .catch(err => {
            console.log('could not edit recipe', err)
        })
    setEditRecipe({
      id: recipe.id,
      recipe_title: recipe.recipe_title,
      image: recipe.image,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      meal_type: recipe.meal_type,
      chef_id: chefId   
    })
  };
  return (
  
    <form className={classes.root} onSubmit={handleSubmit}  autoComplete="off">
      <div>
        <TextField
          required
          id="recipe_title"
          label="recipe_title"
          variant="outlined"
          onChange={handleChanges}
          value={editRecipe.recipe_title}
        />
      </div>
      <div>
      <TextField
          required
          id="image"
          label="image"
          variant="outlined"
          onChange={handleChanges}
          value={editRecipe.image}
        />
      </div>
      <div>
        <TextField
          required
          id="ingredients"
          label="ingredients"
          variant="outlined"
          onChange={handleChanges}
          value={editRecipe.ingredients}
        />
      </div>
      <div>
        <TextField
          required
          id="instructions"
          label="instructions"
          variant="outlined"
          onChange={handleChanges}
          value={editRecipe.instructions}
        />
      </div>
      <div>
        <TextField
          required
          id="meal_type"
          label="meal_type"
          variant="outlined"
          onChange={handleChanges}
          value={editRecipe.meal_type}
        />
      </div>
      <Button
      variant="contained"
      type="button"
      color="secondary"
      onClick={handleSubmit}
      >
        Edit Recipe
      </Button>
    </form>
     
  );
};

const mapStateToProps = (state) => {
  return {
      chefId: state.chefReducer.chef.id
  }
};

export default connect(mapStateToProps, {getChefRecipes})(EditForm);