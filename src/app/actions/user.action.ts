import { Action } from 'redux';

import { User } from '../models';

export interface UserAction extends Action {
  type: "LOGIN" | "LOGOUT";
  payload: User;
}