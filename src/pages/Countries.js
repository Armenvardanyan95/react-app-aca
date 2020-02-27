import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import { addBookmark, removeBookmark } from '../store/actions'
import { Country } from '../components/Country';
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



export function Countries() {
    const {state, dispatch} = useStore();
    const [countries, setCountries] = useState([]);
    const classes = useStyles();

    const addToBookmarks = country => () => dispatch(addBookmark(country));
    const removeFromBookmarks = alpha2Code => () => dispatch(removeBookmark(alpha2Code));
    const isInBookmarks = alpha2Code => state.bookmarks.some(bookmark => bookmark.alpha2Code === alpha2Code)

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(res => setCountries(res));
    }, []);

    return (
        <div className={classes.centered}>
            {countries.map(
                country => <Country key={country.alpha2Code}
                                    country={country}
                                    classes={classes}
                                    isInBookmarks={isInBookmarks(country.alpha2Code)}
                                    addToBookmarks={addToBookmarks(country)}
                                    removeFromBookmarks={removeFromBookmarks(country.alpha2Code)}/>
            )}
        </div>
    );
}