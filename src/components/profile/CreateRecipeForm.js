import React, { useState } from "react";
import { connect } from 'react-redux';
import { getChefRecipes } from '../../actions/chefActions';
import axiosWithAuth from '../../utils/axiosWithAuth';
// material-ui
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

const CreateRecipeForm = ({chefId, handleClose, getChefRecipes}) => {
  const classes = useStyles();
  const [ newRecipe, setNewRecipe ] = useState({
    recipe_title: '',
    image: '',
    ingredients: '',
    instructions: '',
    meal_type: '',
    chef_id: chefId  
  });
  const handleChanges = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('FROM THE CREATE SUBMIT', newRecipe)
    axiosWithAuth()
        .post('https://simmr.herokuapp.com/api/recipes', newRecipe)
        .then(res => {
            console.log('new recipe posted', res)
            getChefRecipes(chefId);
            handleClose();
        })
        .catch(err => {
            console.log('could not post recipe', err)
        })
    setNewRecipe({
      recipe_title: '',
      image: '',
      ingredients: '',
      instructions: '',
      meal_type: '',
      chef_id: chefId  
    })
  };

  return (
 
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
      <div>
        <TextField
          required
          id="recipe_title"
          label="recipe_title"
          variant="outlined"
          onChange={handleChanges}
          value={newRecipe.recipe_title}
        />
      </div>
      <div>
      <TextField
          required
          id="image"
          label="image"
          variant="outlined"
          onChange={handleChanges}
          value={newRecipe.image}
        />
      </div>
      <div>
        <TextField
          required
          id="ingredients"
          label="ingredients"
          variant="outlined"
          onChange={handleChanges}
          value={newRecipe.ingredients}
        />
      </div>
      <div>
        <TextField
          required
          id="instructions"
          label="instructions"
          variant="outlined"
          onChange={handleChanges}
          value={newRecipe.instructions}
        />
      </div>
      <div>
        <TextField
          required
          id="meal_type"
          label="meal_type"
          variant="outlined"
          onChange={handleChanges}
          value={newRecipe.meal_type}
        />
      </div>
      <Button
        variant="contained"
        type="button"
        color="secondary"
        onClick={handleSubmit}
      >
        Post Recipe
      </Button>
    </form>
 
  );
};

const mapStateToProps = (state) => {
  return {
      chefId: state.chefReducer.chef.id
  }
}

export default connect(mapStateToProps, {getChefRecipes})(CreateRecipeForm);
