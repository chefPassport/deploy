import { GET_CHEF_RECIPES } from '../actions/chefActions';
// import { POST_CHEF_RECIPE } from '../actions/chefActions';
import { DELETE_CHEF_RECIPE } from '../actions/chefActions';
import { EDIT_CHEF_RECIPE } from '../actions/chefActions';
import { CHEF_LOGIN } from '../actions/chefActions';

const initialState = {
    chef: {
        id: '',
        name: '',
        username: '',
        password: '',
        location: '',
        contact_info: '', 
        recipes: []
    }
};

export const chefReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHEF_LOGIN:
            return {
                chef: {
                    ...state.chef,
                    id: action.payload
                }
            }
        case GET_CHEF_RECIPES:
            return {
                chef: {
                    ...state.chef,
                    recipes: action.payload
                }
            };
        // case POST_CHEF_RECIPE:
        //     return {
        //         chef: {
        //             ...state.chef,
        //             recipes: [
        //                 ...state.chef.recipes,
        //                 action.payload
        //             ]
        //         }
        //     };
        case DELETE_CHEF_RECIPE:
            return {
                chef: {
                    ...state.chef,
                    recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
                }
            };
        case EDIT_CHEF_RECIPE:
            return {
                chef: {
                    ...state.chef,
                    recipes: state.recipes.map(recipe => {
                        if(recipe.id === action.payload.id){
                            return action.payload
                        } else {
                            return recipe
                        }
                    })
                }
            };
        default:
            return state;
    }
};