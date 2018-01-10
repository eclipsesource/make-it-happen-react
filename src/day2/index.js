import React from 'react';
import { Provider } from 'react-redux';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core'
import '@jsonforms/material-renderers';
import { day2 } from '@jsonforms/examples';

const store = initJsonFormsStore(
  day2.data,
  day2.schema,
  day2.uischema
);

const Day2 = () => (
  <Provider store={store}>
    <DispatchRenderer
      schema={day2.schema}
    />
  </Provider>
);

export default Day2;