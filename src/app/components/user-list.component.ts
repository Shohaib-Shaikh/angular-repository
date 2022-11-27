import { Component, Input } from "@angular/core";
import { User } from "../models/users";

@Component({
    selector:'user-list',
    template:` 
        <div fxLayout="ROW wrap" fxLayoutAlign="center start"  fxLayoutGap="30px" >
            <user-card  [user]="user" *ngFor="let user of users" ></user-card>
        </div>
    `,
    styles:[``]
})
export class UserListComponent {

    @Input() users: User[];

    constructor(){}

}