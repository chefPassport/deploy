import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions/viewerActions';
import styled from 'styled-components';
// import NavBarC from './NavBarC';
import NavBar from './NavBar';
import RecipeList from './homePage_components/recipeList';
import Spotlight from '../img/Recipe_Spotlight.jpg'

const HomePage = ({getAllRecipes}) => {

    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <>
            {/* <NavBarC /> */}
            <NavBar />
            {/* <H3>Recipe Spotlight</H3> */}
            <ImgSpotLight src={Spotlight} alt='recipe spotlight'/>
            <RecipeList />
        </>
    )
};

export default connect(() => {}, { getAllRecipes })(HomePage)

const ImgSpotLight = styled.img`
    max-height: 62vh;
    display: block;
    margin: 0 auto;
    width: 100%;
`;
// const H3 = styled.h3`
//     margin: 15px 20px 5px 20px;
// `;