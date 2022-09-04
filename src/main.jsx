import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from './containers/AppContainer';
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <StyledEngineProvider injectFirst> */}
        <AppContainer />
      {/* </StyledEngineProvider> */}
    </Provider>
  </React.StrictMode>
);
