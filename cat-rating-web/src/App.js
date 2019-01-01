import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import Root from './Root';

import promiseMiddleware from './middlewares/promiseMiddleware'
import rootReducer from "./reducers";

const store = createStore(rootReducer, {},
  compose(
    // responsiveStoreEnhancer,
    applyMiddleware(promiseMiddleware()),
  ),);


const theme = createMuiTheme();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Root />
    </MuiThemeProvider>
  </Provider>
);

export default App;
