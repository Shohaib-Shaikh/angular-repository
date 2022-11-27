import { User } from '../models/users'

export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCCESS = 'user list success';

export class UserListRequestAction {
    readonly type = USER_LIST_REQUEST;
}

export class UserListSucessAction {
    readonly type = USER_LIST_SUCCESS;

    constructor(public payload?: { data: User[] }) {
    }
}