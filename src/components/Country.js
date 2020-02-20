import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export const Country = ({country, classes, isInBookmarks, addToBookmarks, removeFromBookmarks}) => (
    <Card className={classes.card}>
        <CardHeader 
            title={country.name}
            subheader={'Population: ' + country.population}/>
        <CardMedia className={classes.media} title="Flag" image={country.flag}/>
        <CardContent>
            Capital: {country.capital}
        </CardContent>
        <CardActions>
            {
                isInBookmarks ? 
                    <Button onClick={removeFromBookmarks}>Remove From Bookmarks</Button> :
                    <Button onClick={addToBookmarks}>Add to Bookmarks</Button>
            }
            
        </CardActions>
    </Card>
);