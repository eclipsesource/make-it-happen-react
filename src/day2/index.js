import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Actions, JsonForms, jsonformsReducer } from '@jsonforms/core'
import { materialRenderers, materialFields } from '@jsonforms/material-renderers';
import { day2 } from '@jsonforms/examples';

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      renderers: materialRenderers,
      fields: materialFields
    }
  }
);

store.dispatch(Actions.init(day2.data, day2.schema, day2.uischema));

const Day2 = () => (
  <Provider store={store}>
    <JsonForms />
  </Provider>
);

export default Day2;