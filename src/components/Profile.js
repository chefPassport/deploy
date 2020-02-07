import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getChefRecipes } from '../actions/chefActions';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
// material-UI
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../index.css";
// components
import NavBar from './NavBarNoSearch';
import ProfileModal from "./profile/ProfileModal";
import EditModal from "./profile/EditModal";
import Footer from "./Footer";
import TextFalse from './profile/conditionalComponents/ternaryTextFalse';
import TextTrue from './profile/conditionalComponents/ternaryTextTrue'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const Profile = ({getChefRecipes, chefId, chefRecipes}) => {
  const classes = useStyles();
  let history = useHistory();
  const [ profileInfo, setProfileInfo ] = useState('false')
  const [ chefInfo, setChefInfo ] = useState([])

  const deleteRecipe = (recipeID, chefId) => {
    axiosWithAuth()
        .delete(`https://simmr.herokuapp.com/api/chefs/${chefId}/recipes/${recipeID}`)
        .then(res => {
            console.log('Recipe was DELETED', res)
        })
        .catch(err => {
            console.log('could not delete recipe', err)
        })
    getChefRecipes(chefId);
  };

  const conditionalRender = () => {
    if(chefRecipes.length > 0){
      setProfileInfo(true)
      setChefInfo([chefRecipes[0].name, chefRecipes[0].location, chefRecipes[0].contact_info]);
    } else {
      setProfileInfo(false)
      
    }
  };

  useEffect(() => {
    conditionalRender();
  }, [chefRecipes])
  


  return (
    <div className="logInAnimation">
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
                {profileInfo ? <TextTrue chefInfo={chefInfo}/> : <TextFalse />}
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <ProfileModal />
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {/* RECIPE CARDS BEING MAPPED */}
              {chefRecipes.map(recipe => (
                <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                  <div className="card">
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={recipe.image}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {recipe.recipe_title}
                        </Typography>
                        <Typography>
                          {recipe.meal_type}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <EditModal recipe={recipe}/>
                        <Button
                          variant="contained"
                          type="button"
                          color="secondary"
                          onClick={() => deleteRecipe(recipe.id, chefId)}
                        >
                          Delete
                        </Button>
                        <Button size="small" 
                                color="primary" 
                                onClick={() => history.push(`/home/recipe/${recipe.id}`)}>
                        Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </Grid>
              ))}
              {/* END OF RECIPE CARDS BEING MAPPED */}
            </Grid>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      chefId: state.chefReducer.chef.id,
      chefRecipes: state.chefReducer.chef.recipes
  }
}

export default connect(mapStateToProps, {getChefRecipes})(Profile)

