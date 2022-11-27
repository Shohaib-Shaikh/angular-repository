import { Injectable} from '@angular/core';
import { getUserLoaded, getUserLoading, getUsers, RootReducerState} from '../reducers';
import { Store } from '@ngrx/store';
import { ApiService } from './api.service';
import { UserListRequestAction, UserListSucessAction } from '../actions/user-action';
import { combineLatest } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from '../models/users';



@Injectable()
export class AppRepository{
    constructor(private store: Store<RootReducerState>, private apiService: ApiService){ }

    getUserList(force = false): [Observable<boolean>,Observable<User[]>]{
        const loading$ = this.store.select(getUserLoading);

        const loaded$ = this.store.select(getUserLoaded);
    
        const getUserData = this.store.select(getUsers);
    
        combineLatest([loaded$, loading$]).subscribe((data) => {
          if (!data[0] && !data[1] || force) {
            this.store.dispatch(new UserListRequestAction());
            this.apiService.getAllPost().subscribe(res => {
              this.store.dispatch(new UserListSucessAction({data: res}));
            });
          }
        });
        return [loaded$,  getUserData];
        
    }
}