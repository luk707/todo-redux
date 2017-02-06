import { Action } from 'redux';

export interface Todo {
    name: string;
    done: boolean;
}

export interface User {
    data?: {
        name: string;
        password: string;
    };
    authenticated: boolean;
}

export interface State {
  todos: Todo[];
  user: User;
}