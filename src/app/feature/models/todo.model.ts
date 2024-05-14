import { TodoStatus } from '../types/todo-status.type';

export interface Todo {
  id: number;
  user_id: number;
  title: string;
  due_on: string;
  status: TodoStatus;
}
