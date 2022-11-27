import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard.component';
import { YoutubeHeaderComponent } from './components/layout/header.component';
import { LayoutComponent } from './components/layout/youtube-layout.component';
import { PostComponent } from './containers/post.component';
import { UsersComponent } from './containers/users.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card.component';
import { UserListComponent } from './components/user-list.component';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers'
import { AppRepository } from './services/app-repository';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    YoutubeHeaderComponent,
    DashboardComponent,
    PostComponent,
    UsersComponent,
    UserCardComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FlexModule,
    StoreModule.forRoot(rootReducer),
    
  ],
  providers: [HttpService, ApiService,AppRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
