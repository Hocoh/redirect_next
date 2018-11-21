import React from 'react';

import { Provider } from 'react-redux';
import configureStore from '../../state';

// configure the store
export const store = configureStore();
// set the initial state
const initialState = store.getState();

// display the store state
('initial state:', JSON.stringify(initialState, null, 2));

store.subscribe(() => ('state changed:', store.getState()));
const storeWrapper = Page => (

  class PageWrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Page />
        </Provider>
      );
    }
  }
);

export default storeWrapper;
