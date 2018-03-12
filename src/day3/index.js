import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Actions, jsonformsReducer } from '@jsonforms/core'
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialFields } from '@jsonforms/material-renderers';
import { day3 } from '@jsonforms/examples';

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      renderers: materialRenderers,
      fields: materialFields
    }
  }
);

store.dispatch(Actions.init(day3.data, day3.schema, day3.uischema));

const Day3 = () => (
  <Provider store={store}>
    <JsonForms />
  </Provider>
);

export default Day3;