import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosAPIService } from './feature/services/todos-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Todo } from './feature/models/todo.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private todosAPIService = inject(TodosAPIService);

  protected errMsg?: string;
  protected secondPendingTodo?: Todo;

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos(): void {
    this.todosAPIService
      .getTodos({
        status: 'pending',
        page: 2,
        per_page: 1,
      })
      .subscribe({
        next: (todos) => {
          const todo = todos.at(0);

          if (todo) {
            this.secondPendingTodo = todo;
          } else {
            this.errMsg =
              "Second element with status 'pending' does not exist.";
          }
        },
        error: (err: HttpErrorResponse) => {
          this.errMsg = err.message;
        },
      });
  }
}
