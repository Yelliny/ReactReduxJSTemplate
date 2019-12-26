import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import { routes } from '../../routes/routes';
import { todoApp } from '../../state/todo/reducers/reducers';

const reducers = {
    todoApp
};

function App() {
    return (
        <Provider store={createStore(combineReducers(reducers), applyMiddleware(thunk))}>
            {routes}
        </Provider>
      );
    }
    
    export default App;
