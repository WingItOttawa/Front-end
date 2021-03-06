import React, { Component } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

const StyledInputContainer = styled.div`
    margin-top: 2em;
    position: relative;
`;

const StyledInput = styled.input`
    font-size: 0.9em;
    padding: 0.8em 1.4em 0.8em 1.4em;
    box-sizing: border-box;
    border: none;
    border-radius: 2.5em;
    outline: none;
    box-shadow: 0 0 30px 0 rgba(43,86,112,.1);
    width: 60vw;
`;

const StyledIconSpan = styled.span`
    position: relative;
    right: 2em;
    top: 0.18em;
`;

type Props = {};

type State = {
    term: string;
};

class SearchBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({term: event.currentTarget.value});
    }
    onFormSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("Logging simple message on submit");
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <StyledInputContainer>
                    <StyledInput 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        placeholder="Insert article link...">
                    </StyledInput>
                    <StyledIconSpan onClick={this.onFormSubmit}>
                        <IoIosSearch />
                    </StyledIconSpan>
                </StyledInputContainer>
            </form>
        );
    }
}

export default SearchBar;
