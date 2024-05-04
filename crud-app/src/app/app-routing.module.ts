import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/adduser/adduser.component';
import { EditUserComponent } from './pages/edituser/edituser.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/home/pages/todo-list/todo-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavHeaderComponent } from './shared/components/nav-header/nav-header.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "add-user", component: AddUserComponent},
  {path: "edit-user", component: EditUserComponent},
  {path: "app", component: HomeComponent},
  {path: "users", component: UsersComponent},
  { path: 'nav-header', component: NavHeaderComponent },  {
    path: "app", component: HomeComponent,
    children: [
      {path: "", component: WelcomeComponent},
      {path: "todo-list", component: TodoListComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
