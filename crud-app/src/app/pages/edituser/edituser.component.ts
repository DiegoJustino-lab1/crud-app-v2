import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EditUserComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  });

  roles = ['Engenheiro de FE', 'Engenheiro de BE', 'Analista de dados', 'Líder Técnico'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userForm.setValue({
      name: 'Nome do usuário',
      email: 'email@dominio.com',
      role: 'Engenheiro de FE',
      password: 'senha123',
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.router.navigate(['/users']);
    }
  }
}