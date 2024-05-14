import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodosRequestParams } from '../models/todos-request-options.model';

@Injectable({
  providedIn: 'root',
})
export class TodosAPIService {
  constructor(private http: HttpClient) {}

  public getTodos(
    todosParams: TodosRequestParams
  ): Observable<Todo[]> {
    let params = new HttpParams();

    for (const [key, value] of Object.entries(todosParams)) {
      params = params.set(key, value.toString());
    }

    return this.http.get<Todo[]>('https://gorest.co.in/public/v2/todos', {
      params,
    });
  }
}
