import { Injectable } from '@angular/core';

import { Store, Action, createStore, combineReducers, applyMiddleware } from 'redux';

import { Todo, User, State } from './models';

import TodoReducer from './reducers/todo.reducer';
import { TodoAction } from './actions/todo.action';

import UserReducer from './reducers/user.reducer';
import { UserAction } from './actions/user.action';

const createLogger = require('redux-logger');

@Injectable()
export class StoreService {

  private store: Store<State>;

  get Store() {
    return this.store.getState();
  }

  constructor() {
    this.store = createStore(combineReducers<State>({
      todos: TodoReducer,
      user: UserReducer
    }), applyMiddleware(createLogger()));
  }

  public Subscribe(observer: ()=>void) {
    this.store.subscribe(observer);
  }

  public Dispatch(action: TodoAction | UserAction) {
    this.store.dispatch(action);
  }
}