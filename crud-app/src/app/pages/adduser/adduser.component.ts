import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


  @Component({
    selector: 'app-add-user',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.css']
  })
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.userForm.value);
    this.router.navigate(['/users']);
  }
}