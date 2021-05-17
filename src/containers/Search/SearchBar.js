/* React Imports */
import React from "react";

/* Styling Imports */
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form"
import './styles/SearchBar.css'

/**
 * Return the Search Bar component
 * @returns Search Bar component
 */
const SearchBar = ({input_keyword, updateInputKeyword}) => 
    <Form.Control 
    type="text" 
    placeholder="Search Plants ..."
    value={input_keyword}
    onChange= {event => updateInputKeyword(event.target.value)}/>; // event.target is the input node/ event.target.value is value attribute of the node

export default SearchBar;