import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
    @Input() todo:Todo;
    @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter;
    @Output() markDone: EventEmitter<Todo> = new EventEmitter;
    
    ngOnInit(): void {

    }
    delete(todo: Todo){
      this.deleteTodo.emit(todo);
    }

    markAsDone(todo: Todo){
      console.log("Dil machle haye haye")
      this.markDone.emit(todo);
    }
}
