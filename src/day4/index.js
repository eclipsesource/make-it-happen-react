import React from 'react';
import { Provider } from 'react-redux';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core'
import '@jsonforms/material-renderers';
import { day4 } from '@jsonforms/examples';

const store = initJsonFormsStore({
  data: day4.data,
  schema: day4.schema,
  uischema: day4.uischema
});

const Day4 = () => (
  <Provider store={store}>
    <DispatchRenderer
      schema={day4.schema}
      uischema={day4.uischema}
    />
  </Provider>
);

export default Day4;