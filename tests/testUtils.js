import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { Provider } from 'react-redux';
import  store  from '../src/redux/store';
import { Global } from '@emotion/react';
import {render} from '@testing-library/react'

const theme = createTheme({
  status: {
    danger: 'red',
  },
});

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

AllTheProviders.propTypes = {
  children: PropTypes.node
};

export * from '@testing-library/react';
export {customRender as render}

