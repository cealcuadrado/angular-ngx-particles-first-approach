import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParticlesModule } from 'ngx-particle';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
