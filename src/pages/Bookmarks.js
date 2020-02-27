import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Country } from '../components/Country';
import { removeAllBookmarks } from '../store/actions';
import { useStore } from '../store/use-store';

const useStyles = makeStyles({
    centered: {
        width: '60%',
        margin: 'auto',
    },
    media: {
        height: 250,
    },
    card: {
        marginTop: 10,
    },
});

export function Bookmarks() {
    const {state, dispatch} = useStore();
    const {bookmarks} = state;
    const classes = useStyles();

    const removeAll = () => dispatch(removeAllBookmarks());

    return (
        <div className={classes.centered}>
            {bookmarks.length > 0 ? <Button onClick={removeAll}>Remove All Bookmarks</Button> : null}
            {bookmarks.map(
                country => <Country key={country.alpha2Code}
                                    country={country}
                                    classes={classes}/>
            )}
        </div>
    );
}