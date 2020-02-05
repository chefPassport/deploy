import Axios from 'axios';

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';

export const getAllRecipes = () => dispatch => {
    Axios   
        .get('https://simmr.herokuapp.com/api/recipes')
        .then(res => {
            console.log('retrieved ALL recipes', res)
            dispatch({ type: GET_ALL_RECIPES, payload: res.data})
        })
        .catch(err => {
            console.log('could not fetch ALL recipes', err)
        })
}