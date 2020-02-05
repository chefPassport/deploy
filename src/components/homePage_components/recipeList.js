import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from './recipeCard';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const RecipeList = ({allRecipes}) => {
    const classes = useStyles();

    return (
        <>
        <H3>Popular Recipes</H3>
        <CardSection>
            {allRecipes ?
                allRecipes.slice(0, 3).map(recipe => {
                    return  <CardCont key={recipe.id}>
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            </CardCont>
                }) 
                : 
                <div className={classes.root}>
                     <CircularProgress />
                </div>
            }
        </CardSection>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        allRecipes: state.viewerReducer.allRecipes
    }
}

export default connect(mapStateToProps, {})(RecipeList)

const CardSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;
const H3 = styled.h3`
    margin: 20px;
    text-align: center;
`;
const CardCont = styled.div`
    margin: 0 20px 20px 15px;
    border-radius: 15px;
`;