import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Root from './Root';

const theme = createMuiTheme();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>
);

export default App;
