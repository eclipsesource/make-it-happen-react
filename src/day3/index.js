import React from 'react';
import { Provider } from 'react-redux';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core'
import '@jsonforms/material-renderers';
import { day3 } from '@jsonforms/examples';

const store = initJsonFormsStore(
  day3.data,
  day3.schema,
  day3.uischema
);

const Day3 = () => (
  <Provider store={store}>
    <DispatchRenderer
      schema={day3.schema}
    />
  </Provider>
);

export default Day3;