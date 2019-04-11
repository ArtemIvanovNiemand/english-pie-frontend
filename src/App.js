import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import GroceryStore from 'stores/main';
import './App.css';

const AppWrapper = styled.div`
  color: #4ff;
  text-align: left;
`;

@observer
class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        TEST

        {
          GroceryStore.count
        }

        <button
          type="button"
          onClick={GroceryStore.inc}
        >
          inc
        </button>
      </AppWrapper>
    );
  }
}

export default App;
