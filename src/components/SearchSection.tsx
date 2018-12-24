import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../Wingit.jpg';

const StyledSearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    height: 100vh;
    width: 100%;
`;

const StyledLogo = styled.img`
    width: 500px;
    height: 130px;
`;

const SearchSection = () => {
    return(
        <StyledSearchContainer>
            <StyledLogo src={logo} />
        </StyledSearchContainer>
    );
}

export default SearchSection;
