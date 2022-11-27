import { Component, OnInit } from '@angular/core';
import {
  UserListRequestAction,
  UserListSucessAction,
} from 'src/app/actions/user-action';
import { getUserLoaded, getUserLoading, getUsers, RootReducerState} from '../reducers';
import { User } from '../models/users';
import { ApiService } from '../services/api.service';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { AppRepository } from '../services/app-repository';

@Component({
  selector: 'users',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <user-list [users]="this.users"></user-list>
    </div>
  `,
  styles: [``],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private appRepository: AppRepository) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const userData$ = this.appRepository.getUserList()[1];
    userData$.subscribe(data => {
        this.users = data;
    });
  }
}
