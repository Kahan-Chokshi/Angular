import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoundBlockDirective } from './round-block.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundBlockDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
