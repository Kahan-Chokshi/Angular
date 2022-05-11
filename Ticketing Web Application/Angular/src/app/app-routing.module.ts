import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { RegisterComponent } from './components/common/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
