import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../NavBarNoSearch';

// material-ui
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import FastfoodIcon from '@material-ui/icons/Fastfood';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const RecipePage = ({allRecipes}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
    const [ renderRecipe, setRenderRecipe ] = useState({
      id: '',
      recipe_title: '',
      image: '',
      ingredients: '',
      instructions: '',
      meal_type: '',
      chef_id: ''  
    });
    const { id } = useParams();
    useEffect(() => {
        const recipeToRender = allRecipes.find(recipe => `${recipe.id}` === id)
        if(recipeToRender){
            setRenderRecipe(recipeToRender)
        };
    }, [allRecipes, id]);

    return (
        <div>
            <NavBar />
            <ImgHeader src={renderRecipe.image} alt={`preview of ${renderRecipe.recipe_title}`} />
            <div className={classes.root}>
               
                <AppBar position="static" color="default">
                    <HeaderCont>
                        <H2>{renderRecipe.recipe_title}</H2>
                        <Chip variant="outlined" color="secondary" label={renderRecipe.meal_type} icon={<FastfoodIcon />} />
                    </HeaderCont>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullwidth"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                    centered
                    >  
                        <Tab label="Instructions" icon={<MenuBookIcon />} {...a11yProps(0)} />
                        <Tab label="Ingredients" icon={<LocalOfferIcon />} {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <PanelContent>
                        {renderRecipe.instructions}
                    </PanelContent>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <PanelContent>
                        {renderRecipe.ingredients}
                    </PanelContent>
                </TabPanel>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        allRecipes: state.viewerReducer.allRecipes
    }
};

export default connect(mapStateToProps, {})(RecipePage);

const ImgHeader = styled.img`
    max-height: 65vh;
    display: block;
    margin: 0 auto;
    width: 100%;
`;
const PanelContent = styled.div`
    width: 80%;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
`;
const HeaderCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
`;
const H2 = styled.h2`
    margin-right: 10px;
`;
