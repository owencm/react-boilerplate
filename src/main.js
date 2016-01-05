import React from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/lib/raised-button';

// Temporary hack to enable material-ui until React 1.0 is released
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let HelloWorld = () => {
  return (
    <RaisedButton label='Hello, world!'></RaisedButton>
  );
};

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('content')
);
