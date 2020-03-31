import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { AteCountPipe } from './ate-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    AteCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
