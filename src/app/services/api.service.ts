import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpService } from './http.service';
import { User } from '../models/users';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {}

  getAllPost(): Observable<User[]> {
    return this.httpService.get('/users')
    .pipe(map((data) => data as User[]));

  }

}
