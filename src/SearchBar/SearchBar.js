import React from "react";
import { TextField } from "@material-ui/core";
import './SearchBar.css'

function SearchBar(props) {

    function searchEpisode(name) {
        props.searchEpisode(name);
    }

    function onKeyUp(event) {        
        if (event.key === "Enter") {
            searchEpisode(event.target.value);
        }
    }

    return (
        <div className="SearchBar">
            <TextField 
                id="outlined-basic" 
                label="Search by typing episode names and hiting 'Enter' Morty! Like always!" 
                variant="outlined" 
                sx={{
                    width: '90%',
                    border: 'solid 2px',
                    margin: '10px',
                    textAlign: 'center'
                }}
                onKeyUp={onKeyUp}
            />
        </div>
    );
}

export default SearchBar;
