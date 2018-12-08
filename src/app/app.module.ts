import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { HttpClientModule } from '@angular/common/http';
import { RangePipe } from './pipes/range.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    InstrumentComponent,
    RangePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
