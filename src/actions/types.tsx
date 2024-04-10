import { FetchTodosActions, DeletedTodoAction } from "./index";

export enum ActionTypes {
  fetchTodos = "fetchTodos",
  deleteTodo = "deleteTodo",
}

export type Action = FetchTodosActions | DeletedTodoAction;
