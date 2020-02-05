import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions/viewerActions';
import styled from 'styled-components';
// import NavBarC from './NavBarC';
import NavBarNoSearch from './NavBarNoSearch';
import RecipeList from './homePage_components/recipeList';
import Spotlight from '../img/Recipe_Spotlight.jpg'
import Footer from './Footer';

const HomePage = ({getAllRecipes}) => {

    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <>
            {/* <NavBarC /> */}
            <NavBarNoSearch />
            {/* <H3>Recipe Spotlight</H3> */}
            <ImgSpotLight src={Spotlight} alt='recipe spotlight'/>
            
            <RecipeList />
            <Footer />
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