import { Todo } from '../models';
import { TodoAction } from '../actions/todo.action';

export default function (state: Todo[] = [], action: TodoAction): Todo[] {
    let nextState = [...state];
    let index = state.indexOf(action.payload);
    let todo = action.payload;
    switch (action.type) {
        case "TODO_NEW":
            nextState.push(action.payload);
            break;
        case "TODO_TOGGLE":
            nextState[index] = {
                name: todo.name,
                done: !todo.done
            };
            break;
        case "TODO_REMOVE":
            nextState.splice(state.indexOf(action.payload), 1);
            break;
    }
    return nextState;
}