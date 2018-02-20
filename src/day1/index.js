import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Actions, JsonForms, jsonformsReducer } from '@jsonforms/core'
import { materialRenderers, materialFields } from '@jsonforms/material-renderers';
import { day1 } from '@jsonforms/examples';

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      renderers: materialRenderers,
      fields: materialFields
    }
  }
);

store.dispatch(Actions.init(day1.data, day1.schema, day1.uischema));

const Day1 = () => (
  <Provider store={store}>
    <JsonForms />
  </Provider>
);

export default Day1;