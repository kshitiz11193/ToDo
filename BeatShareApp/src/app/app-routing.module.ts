import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import {ControlsComponent}from './controls/controls.component';
import {InstrumentComponent} from './instrument/instrument.component';
import { MusicShareComponent } from './music-share/music-share.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'user',component:UserhomeComponent}
//{ path:'playBeat', component:MusicShareComponent }






]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
