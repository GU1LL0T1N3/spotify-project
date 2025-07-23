import React from 'react';
import Data from './mockData.json';

export default function SearchResults() {
    return (
        <div>
            {Data.map(songs => (
                <div>
                    <h1>{songs['song-title']}</h1>
                    <h2>Artist: {songs.artist}</h2>
                    <p>Genre: {songs.genre}</p>
                </div>
            ))}
        </div>
    )
}