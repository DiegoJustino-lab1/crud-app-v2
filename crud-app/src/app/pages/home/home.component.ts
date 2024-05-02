import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users = [
    { name: 'Nome 1', email: 'email1@dominio.com', role: 'Engenheiro de FE' },
    { name: 'Nome 2', email: 'email2@dominio.com', role: 'Engenheiro de BE' },
    // Adicione mais usuários conforme necessário
  ];

  get userCount(): number {
    return this.users.length;
  }

  get usersByRole(): { [role: string]: number } {
    return this.users.reduce((acc: { [role: string]: number }, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});
  }
}