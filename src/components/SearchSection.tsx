import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../Wingit.jpg';
import SearchBar from './SearchBar';

const StyledSearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f7f7f7;
    height: 100vh;
    width: 100%;
`;

const StyledSubtitle = styled.p`
    margin-top: 2em;
    font-weight: 500;
`;

const StyledLogo = styled.img`
    width: 500px;
    height: 130px;
`;

const SearchSection = () => {
    return(
        <StyledSearchContainer>
            <StyledLogo src={logo} />
            <StyledSubtitle>Find the political leaning of an article</StyledSubtitle>
            <SearchBar />
        </StyledSearchContainer>
    );
}

export default SearchSection;
