import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'
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
import { ProfileComponent } from './profile/profile.component';
import { PlaylistComponent } from './playlist/playlist.component';
//import {StorageServiceModule} from 'angular-webstorage-service';
import {AppGlobals} from './app.global';


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
    UsersComponent,
    PostsComponent,
    DetailsComponent,
    ProfileComponent,
    PlaylistComponent,
    BeatShareUsersComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  //  StorageServiceModule
   // MatRadioModule,
  ],
  providers: [UserService, CookieService, AppGlobals],
  bootstrap: [AppComponent]
})
export class AppModule { }
