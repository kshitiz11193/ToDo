import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import {ControlsComponent}from './controls/controls.component';
import {InstrumentComponent} from './instrument/instrument.component';
import { MusicShareComponent } from './music-share/music-share.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import  { BeatShareUsersComponent } from './beat-share-users/beat-share-users.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'user',component:UserhomeComponent},

{
  path: 'NewsFeed',
  component: UsersComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
},
{
  path: 'NewsFeed/posts',
  component: PostsComponent
},
{
  path:'Profile',
  component:ProfileComponent
}
//{ path:'playBeat', component:MusicShareComponent }






]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
