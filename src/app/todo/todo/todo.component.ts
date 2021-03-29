import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo = new Todo();
  constructor(
    private todoService: TodoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
    this.toastr.success(`Le todo ${this.todo.name} a été ajouté avec succès`);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
    this.toastr.error(`Le todo ${todo.name} a été supprimé avec succès`);
  }
}
