import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Filter Sorting Pagination';
  filter: string = '';
  p: number = 1;
  key: string = 'name';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  games = [
    {
      "id": "1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id": "2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id": "3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id": "4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id": "5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id": "6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id": "7",
      "name": "NFS MW",
      "genre": "Sport"
    }, {
      "id": "8",
      "name": "Fifa 16",
      "genre": "Sport"
    }, {
      "id": "9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    }, {
      "id": "10",
      "name": "Witcher Assasins on King",
      "genre": "Adventure"
    }
  ]
}
