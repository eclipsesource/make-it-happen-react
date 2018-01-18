import React from 'react';
import { Provider } from 'react-redux';
import { DispatchRenderer, initJsonFormsStore, registerRenderer } from '@jsonforms/core'
import '@jsonforms/material-renderers';
import { day6, RatingControl, ratingControlTester } from '@jsonforms/examples';

const store = initJsonFormsStore({
  data: day6.data,
  schema: day6.schema,
  uischema: day6.uischema
});

store.dispatch(registerRenderer(ratingControlTester, RatingControl));

const Day6 = () => (
  <Provider store={store}>
    <DispatchRenderer
      schema={day6.schema}
    />
  </Provider>
);

export default Day6;
