// ====================================
//            	IMPORT
// ====================================

// React
import React from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form"
import './styles/SearchBar.css'


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the Search Bar component
 * @param {} inputKeyword - the currently typed input
 * @param {} updateInputKeyword - function to update the filtered list and current inputKeyword
 * @returns Search Bar component
 */
const SearchBar = ({inputKeyword, updateInputKeyword}) => 

    <Form.Control 
    type="text" 
    placeholder="Search Plants ..."
    value={inputKeyword}
    onChange= {event => updateInputKeyword(event.target.value)}/>; // event.target is the input node/ event.target.value is value attribute of the node

export default SearchBar;