import { Todo, TodoDetail } from '../types/Todo';
import { faker } from '@faker-js/faker';
import { getTodo } from '../utils/todoHelper';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(BASE_URL);
  const todoData = await response.json();

  // const todoData = new Array(5).fill(0).map((_, idx) => {
  //   const todo = getTodo();

  //   return {
  //     ...todo,
  //     id: `${idx}-${todo.id}`,
  //   };
  // });

  return todoData.map((todo: any) => {
    return {
      id: todo.id,
      title: todo.title,
      tag: todo.tag,
    };
  });
}

export async function getTodoContentById(id: number): Promise<string> {
  const response = await fetch(`${BASE_URL}/${id}`);
  const todoData = await response.json();

  return todoData.content;
}

export async function deleteTodoById(id: number) {
  const response = await fetch(`${BASE_URL}/delete/${id}`);

  const result = await response.json();

  return result;
}

type UpdateTodoDetail = {
  id: number;
  title?: string;
  tag?: string;
  content?: string;
};

export async function updateTodo(todo: UpdateTodoDetail) {
  const response = await fetch(`${BASE_URL}/update/${JSON.stringify(todo)}`);
  const result = await response.json();

  return result;
}

export async function addTodo(todo: TodoDetail) {
  const response = await fetch(`${BASE_URL}/add/${JSON.stringify(todo)}`);
  const result = await response.json();

  return result;
}
