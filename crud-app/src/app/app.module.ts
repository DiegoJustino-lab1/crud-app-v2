import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './pages/adduser/adduser.component';
import { EditUserComponent } from './pages/edituser/edituser.component';
import { NavHeaderComponent } from './pages/home/components/nav-header/nav-header.component';
import { NavbarComponent } from './pages/home/components/navbar/navbar.component';
import { UsersComponent } from './pages/home/components/users/users.component';
import { WelcomeComponent } from './pages/home/components/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/home/pages/todo-list/todo-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    WelcomeComponent,
    TodoListComponent,
    NavHeaderComponent,
    AddUserComponent,
    HomeComponent,
    EditUserComponent, // Descomente esta linha
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }