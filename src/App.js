import React from 'react';
import './App.scss';
import AddBookView from './views/AddBookView';
import {StateContextProvider} from './stateContext';

function App() {
  return (
    <>
      <StateContextProvider>
        <AddBookView />
      </StateContextProvider>
    </>
  );
}

export default App;
