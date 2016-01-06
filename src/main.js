import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from 'material-ui/lib/app-bar';
import Divider from 'material-ui/lib/divider';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import TodoListItem from './components/todo-list-item.js';

import DoneIcon from 'material-ui/lib/svg-icons/action/done';

// Temporary hack to enable material-ui until React 1.0 is released
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let App = () => {
  return (
    <div>
      <AppBar
        title='Aspire'
        showMenuIconButton={false}
      />
      <List subheader='Today'>
        <TodoListItem />
      </List>
      <Divider />
      <List subheader='Next Week'>
        <TodoListItem />
      </List>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
