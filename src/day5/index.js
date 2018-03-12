import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Actions, jsonformsReducer } from '@jsonforms/core'
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialFields } from '@jsonforms/material-renderers';
import { day5 } from '@jsonforms/examples';

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      renderers: materialRenderers,
      fields: materialFields
    }
  }
);

store.dispatch(Actions.init(day5.data, day5.schema, day5.uischema));

const Day5 = () => (
  <Provider store={store}>
    <JsonForms />
  </Provider>
);

export default Day5;
