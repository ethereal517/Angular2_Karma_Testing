import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  constructor(private todoDataService: TodoDataService) {

  }

  toggleTodoComplete(todo) {
  	this.todoDataService.toggleTodoComplete(todo);
  }
}
