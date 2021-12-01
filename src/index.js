import React,{useContext,useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context/app_context';
import {CharacterProvider} from './context/character_context';


ReactDOM.render(
  <AppProvider>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </AppProvider>,

  

  document.getElementById('root')
);

