import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction';
  clients = [
    {
      id: '1',
      name: 'Sirohi'
    },
    {
      id: '2',
      name: 'Siroha'
    },
    {
      id: '3',
      name: 'Sisha'
    },
    {
      id: '4',
      name: 'Simar'
    },
    {
      id: '5',
      name: 'Sibhya'
    },
    {
      id: '6',
      name: 'Sisir'
    }
  ]

  removeUser(id: string): void {
    this.clients = this.clients.filter((client) => client.id !== id)
  }
}
