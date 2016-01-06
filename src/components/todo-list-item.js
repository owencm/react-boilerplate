import React from 'react';
import ReactDOM from 'react-dom';

import IconButton from 'material-ui/lib/icon-button';
import ListItem from 'material-ui/lib/lists/list-item';

import DoneIcon from 'material-ui/lib/svg-icons/action/done';

const TodoListItem = () => {
  return (
    <ListItem
      primaryText='Buy flowers for Stephanie'
      secondaryText='Every month, last done 1 month ago'
      rightIconButton={
        <IconButton>
          <DoneIcon />
        </IconButton>
      }
    />
  )
}

module.exports = TodoListItem;
