import React from 'react';
import Data from './mockData.json';
import styles from './stylesheets/searchResultsStyle.module.css';

function SearchResults() {
    return (
        <div>
            {Data.map(songs => (
                <div className={styles.resultsContainer}>
                    <h1>{songs['song-title']}</h1>
                    <h2>Artist: {songs.artist}</h2>
                    <p>Genre: {songs.genre}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults;