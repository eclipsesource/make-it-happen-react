import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Actions, JsonForms, jsonformsReducer } from '@jsonforms/core';
import {
  materialRenderers,
  materialFields,
  materialCategorizationTester,
  MaterialCategorizationLayout
} from '@jsonforms/material-renderers';
import { day5 } from '@jsonforms/examples';

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      renderers: materialRenderers.concat(
        [{ tester: materialCategorizationTester, renderer: MaterialCategorizationLayout}]
      ),
      fields: materialFields
    }
  }
);

store.dispatch(Actions.init(day5.data, day5.schema, day5.categoryUiSchema));

const Day5 = () => (
  <Provider store={store}>
    <JsonForms />
  </Provider>
);

export default Day5;
