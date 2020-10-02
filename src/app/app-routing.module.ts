import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './mock-win/components/contact/contact.component';
import { LoginComponent } from './mock-win/components/login/login.component';

const routes: Routes = [
  {
    path: 'mockwin',
    children: [
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  { path: '', redirectTo: '/mockwin/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
