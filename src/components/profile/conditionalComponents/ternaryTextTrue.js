import React from 'react';
import Typography from "@material-ui/core/Typography";

const TextTrue = ({chefInfo}) => {

    return (
        <div>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                true {chefInfo[0]}
            </Typography>
            
            <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
            >
                true {chefInfo[1]}
        </Typography>

        <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
            >
                true {chefInfo[2]}
        </Typography>
     </div>
    )
};

export default TextTrue;