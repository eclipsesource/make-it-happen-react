import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Actions, jsonformsReducer } from '@jsonforms/core'
import { JsonForms } from '@jsonforms/react';
import {
  materialRenderers,
  materialFields,
  materialCategorizationTester,
  MaterialCategorizationLayout
} from '@jsonforms/material-renderers';import { day6 } from '@jsonforms/examples';
import ratingControlTester from "./ratingControlTester";
import RatingControl from "./RatingControl";

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

store.dispatch(Actions.init(day6.data, day6.schema, day6.uischema));
store.dispatch(Actions.registerRenderer(ratingControlTester, RatingControl));

const Day6 = () => (
  <Provider store={store}>
    <JsonForms />
  </Provider>
);

export default Day6;
