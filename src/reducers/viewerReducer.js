import { GET_ALL_RECIPES } from '../actions/viewerActions';

const initialState = {
    allRecipes: []
}

export const viewerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                allRecipes: action.payload
            };
        default:
            return state;
    }
}