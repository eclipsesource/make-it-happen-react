import React from 'react';
import { Provider } from 'react-redux';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core'
import '@jsonforms/material-renderers';
import { day2 } from '@jsonforms/examples';

const store = initJsonFormsStore({
  data: day2.data,
  schema: day2.schema,
  uischema: day2.uischema
});

const Day2 = () => (
  <Provider store={store}>
    <DispatchRenderer
      schema={day2.schema}
    />
  </Provider>
);

export default Day2;