import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {UserService} from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ControlsComponent } from './controls/controls.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { RangePipe } from './pipes/range.pipe';
import { MusicShareComponent } from './music-share/music-share.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
//import { MatRadioModule } from '@angular/material/radio';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { BeatShareUsersComponent } from './beat-share-users/beat-share-users.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppGlobals } from './app.global';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    ControlsComponent,
    InstrumentComponent,
    RangePipe,
    MusicShareComponent,
    SidebarComponent,
    UsersComponent,
    PostsComponent,
    DetailsComponent,
    BeatShareUsersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StorageServiceModule,
  ],
  providers: [UserService, AppGlobals],
  bootstrap: [AppComponent]
})
export class AppModule { }
