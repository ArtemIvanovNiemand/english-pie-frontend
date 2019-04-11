import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const AppWrapper = styled.div`
  color: #fff;
  text-align: left;
`;

const App = () => (
  <AppWrapper>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
                Edit
        {' '}
        <code>src/App.js</code>
        {' '}
                and save to reload.2
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
          Learn React
      </a>
    </header>
  </AppWrapper>
);

export default App;
