import React, { useEffect } from "react";

import { connect } from 'react-redux';
import { getAllRecipes } from '../actions/viewerActions';
import { getChefRecipes } from '../actions/chefActions';
import styled from 'styled-components';

// import NavBarC from './NavBarC';
import NavBarNoSearch from "./NavBarNoSearch";
import RecipeList from "./homePage_components/recipeList";
import Spotlight from "../img/Recipe_Spotlight.jpg";
import Footer from "./Footer";
import "../index.css";


const HomePage = ({getAllRecipes, getChefRecipes, chefId}) => {

    useEffect(() => {
        getAllRecipes();
        getChefRecipes(chefId);
    }, []);


  return (
    <div className="logInAnimation">
      <>
        {/* <NavBarC /> */}
        <NavBarNoSearch />
        {/* <H3>Recipe Spotlight</H3> */}
        <ImgSpotLight src={Spotlight} alt="recipe spotlight" />


        <RecipeList />
        <Footer />
      </>
    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        chefId: state.chefReducer.chef.id
    }
}

export default connect(mapStateToProps, { getAllRecipes, getChefRecipes })(HomePage)


const ImgSpotLight = styled.img`
  max-height: 62vh;
  display: block;
  margin: 0 auto;
  width: 100%;
`;
// const H3 = styled.h3`
//     margin: 15px 20px 5px 20px;
// `;
