import { User } from '../models';
import { UserAction } from '../actions/user.action';

export default function UserReducer(state: User = { authenticated: false }, action: UserAction) {
    switch (action.type) {
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return undefined;
    }
    return state;
}