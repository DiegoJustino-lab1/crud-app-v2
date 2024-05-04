import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  });

  roles = ['Engenheiro de FE', 'Engenheiro de BE', 'Analista de dados', 'Líder Técnico'];

  constructor(private router: Router) { }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.router.navigate(['/app/users']);
    } else {
      console.log(this.userForm.errors);
    }
  }
}