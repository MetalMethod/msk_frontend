import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {userRoutes} from './user.routes';

import { ProfileComponent } from './profile.component';

@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [

    ]
})

export class UserModule{

}