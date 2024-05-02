import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    { name: 'Nome 1', email: 'email1@dominio.com', role: 'Engenheiro de FE' },
    { name: 'Nome 2', email: 'email2@dominio.com', role: 'Engenheiro de BE' },
    // Adicione mais usuários conforme necessário
  ];

  constructor(private router: Router) { }

  newUser(): void {
    this.router.navigate(['/adduser']);
  }

  editUser(index: number): void {
    // Aqui você pode querer passar o usuário para a rota de edição
    // Isso depende de como você implementou a rota de edição
    this.router.navigate(['/edituser', index]);
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
}