import React, { Component } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

const StyledInput = styled.input`
    margin-top: 2em;
    width: 50%;
    font-size: 0.9em;
    padding: 0.8em 1.4em 0.8em 1.4em;
    box-sizing: border-box;
    border: none;
    border-radius: 2.5em;
    outline: none;
    box-shadow: 0 0 30px 0 rgba(43,86,112,.1);
`;

export type Props = {};

class SearchBar extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = { term: '' };
    }
    render(){
        return(
            <StyledInput placeholder="Search a URL"></StyledInput>
        );
    }
}

export default SearchBar;
