import axios from "axios";
import { Dispatch, Store } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosActions {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeletedTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch, store: Store) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosActions>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeletedTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
