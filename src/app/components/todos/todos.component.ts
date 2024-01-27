import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
// import { LocalStorage } from 'angular2-universal';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

    todos:Todo[]
    localTodos: string;
    constructor(){
      // this.localTodos = JSON.parse(this.getTodos());
    }

    ngOnInit(): void {
      // Access localStorage within the ngOnInit lifecycle hook or other methods
      this.localTodos = localStorage.getItem("todos");
      this.todos = JSON.parse(this.localTodos)
    }
  
    // getDataFromLocalStorage() {
    //   // Example: Retrieving data from localStorage
    //   const data = localStorage.getItem('todos');
    //   console.log('Data from localStorage:', data);
    // }

    getTodos(): string{
      return localStorage.getItem("todos")
    }

    deleteTodo(todo:Todo){
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos))
    }

    addTodoItem(todo: Todo){
      console.log("pushing")
      this.todos.push(todo)
      localStorage.setItem("todos", JSON.stringify(this.todos))
      console.log(localStorage.getItem("todos"))
    }

    markDone(todo:Todo){
      todo.active = false;
      // console.log(todo)
      // this.todos[this.todos.indexOf(todo)].active = false;
      localStorage.setItem("todos", JSON.stringify(this.todos))
      console.log(localStorage.getItem("todos"))
    }
}
