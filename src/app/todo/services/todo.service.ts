import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {}
  logger(): void {
    console.log(this.todos);
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  //retourner la liste des todos
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
