
import React, {Fragment, useState, useEffect } from "react";
// import axios from 'axios'

const Planets = () => {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    
    useEffect(() => {
        
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
    
        }, []);
        
        return (
        <Fragment>
            <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
            />
            <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
                </li>
            ))}
            </ul>
        </Fragment>
        );
    }               
export default Planets;
