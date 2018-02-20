import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Actions, JsonForms, jsonformsReducer } from '@jsonforms/core'
import { materialRenderers, materialFields } from '@jsonforms/material-renderers';
import { day4 } from '@jsonforms/examples';

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      renderers: materialRenderers,
      fields: materialFields
    }
  }
);

store.dispatch(Actions.init(day4.data, day4.schema, day4.uischema));

const Day4 = () => (
  <Provider store={store}>
    <JsonForms />
  </Provider>
);

export default Day4;