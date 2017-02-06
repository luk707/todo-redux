import { Action } from 'redux';

import { Todo } from '../models';

export interface TodoAction extends Action {
  type: "TODO_NEW" | "TODO_TOGGLE" | "TODO_REMOVE";
  payload: Todo;
}