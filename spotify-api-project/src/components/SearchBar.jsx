import React, { useState } from 'react';
import Data from '../mockData.json';
import styles from '../stylesheets/searchBarStyle.module.css'

export default function SearchBar() {
    const [query, setQuery] = useState("");
    function handleQuery(e)  {
        setQuery(e.target.value)
    };
    return (
        <div>
            <input 
            type='text' 
            placeholder='Search for your favorite songs'
            onChange={handleQuery}
            className={styles.search} 
            />
        </div>
    )
}