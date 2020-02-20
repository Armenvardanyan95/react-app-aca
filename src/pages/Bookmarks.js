import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Country } from '../components/Country';
import { store } from '../store/store';
import { removeAllBookmarks } from '../store/actions';

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
    const [bookmarks, setBookmarks] = useState(store.getState().bookmarks);
    const classes = useStyles();

    store.subscribe(() => setBookmarks(store.getState().bookmarks));

    const removeAll = () => store.dispatch(removeAllBookmarks());

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