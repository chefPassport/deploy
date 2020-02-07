import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions/viewerActions';
// material-ui imports
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "../index.css";
//component imports
import NavBar from './NavBarNoSearch';
import Footer from "./Footer";
import Heart from "./gallery_components/Heart";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
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

const Gallery = ({allRecipes, getAllRecipes}) => {
  const classes = useStyles();
  let history = useHistory();
  const [ recipesToRender, setRecipesToRender ] = useState(allRecipes)
  const [ searchTerm, setSearchTerm ] = useState('')
  
  const changeHandle = (e) => {
    setSearchTerm(e.target.value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedRecipes = allRecipes.filter(recipe => 
      recipe.recipe_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.meal_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(searchTerm === ''){
      setRecipesToRender(allRecipes);
    } else {
      setRecipesToRender(searchedRecipes)
    };
  };
  useEffect(() => {
    getAllRecipes();
}, []);

  return (
    <div className="logInAnimation">
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="secondary"
                gutterBottom
              >
                Gallery
              </Typography>
              <form className={classes.search} onSubmit={handleSubmit}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  onChange={changeHandle}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </form>
              {/* <form onSubmit={handleSubmit}>
                <TextField 
                  id="outlined-search" 
                  label="Search" 
                  type="search" 
                  variant="outlined" 
                  onChange={changeHandle}
                />
              </form> */}
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {recipesToRender.map(recipe => (
                <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                  <div className="card">
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={recipe.image}
                        title={recipe.recipe_title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {recipe.recipe_title}
                        </Typography>
                        <Typography>
                          Meal Type: {recipe.meal_type}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Heart />
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
            </Grid>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      allRecipes: state.viewerReducer.allRecipes
  }
}

export default connect(mapStateToProps, { getAllRecipes })(Gallery)
