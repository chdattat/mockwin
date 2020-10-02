import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/components/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockWinModule } from './mock-win/mock-win.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MockWinModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
