import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/components/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ContestComponent } from './components/contest/contest.component';

@NgModule({
  declarations: [ContactComponent, LoginComponent, ContestComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [ContactComponent, LoginComponent],
  providers: [],
})
export class MockWinModule {}
