import React from 'react';
import { Provider } from 'react-redux';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core'
import '@jsonforms/material-renderers';
import { day5 } from '@jsonforms/examples';

const store = initJsonFormsStore({
  data: day5.data,
  schema: day5.schema,
  uischema: day5.categoryUiSchema
});

const Day5 = () => (
  <Provider store={store}>
    <DispatchRenderer
      schema={day5.schema}
    />
  </Provider>
);

export default Day5;
