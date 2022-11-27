import { Component, Input } from "@angular/core";
import { User } from "../models/users";

@Component({
    selector:'user-card',
    template:` 
        <mat-card style="margin-bottom: 30px;" fxLayout="column" fxLayoutGap="30px" fxLayoutAlign="start center">
            <mat-card-title>{{this.user.name}}</mat-card-title>
            <mat-card-content>{{this.user.email}}</mat-card-content>
        </mat-card>
    `,
    styles:[``]
})
export class UserCardComponent {
    @Input() user: User;

    constructor(){}

}