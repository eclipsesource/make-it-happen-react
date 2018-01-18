import React from 'react';
import { Provider } from 'react-redux';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core'
import '@jsonforms/material-renderers';
import { day1 } from '@jsonforms/examples';

const store = initJsonFormsStore({
  data: day1.data,
  schema: day1.schema,
});

const Day1 = () => (
  <Provider store={store}>
    <DispatchRenderer
      schema={day1.schema}
    />
  </Provider>
);

export default Day1;