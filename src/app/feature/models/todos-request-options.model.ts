import { TodoStatus } from '../types/todo-status.type';

export interface TodosRequestParams {
  page?: number;
  per_page?: number;
  status?: TodoStatus;
}
