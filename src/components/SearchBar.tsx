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

export type State = {
    term: string;
};

class SearchBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({term: event.currentTarget.value});
    }
    render(){
        return(
            <StyledInput value={this.state.term} onChange={this.onInputChange} placeholder="Insert article link..."></StyledInput>
        );
    }
}

export default SearchBar;
