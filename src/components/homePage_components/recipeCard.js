import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const RecipeCard = ({recipe}) => {
    let history = useHistory();
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="recipe preview img"
                    height="140"
                    // image="https://unsplash.com/photos/4icpQA-5eJY"
                    image={recipe.image}
                    title="recipe preview img"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {recipe.recipe_title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Meal Type: {recipe.meal_type}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" 
                        color="primary" 
                        onClick={() => history.push(`/home/recipe/${recipe.id}`)}>
                 Learn More
                </Button>
            </CardActions>
        </Card>
    )
};

export default RecipeCard;