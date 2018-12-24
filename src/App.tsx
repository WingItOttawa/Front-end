import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SearchSection from './components/SearchSection';

const Container = styled.div`
    height: 300vh;
`;

class App extends Component {
    render() {
        return(
            <Container>
                <SearchSection />
            </Container>
        )
    }
}

export default App;
