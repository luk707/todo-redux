import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../models';
@Component({
  selector: '[app-todo-add]',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent {
  private todoName: string = 'Add a todo...';
  private placeholder: boolean = true;
  @Output("new") newEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  NewTodo(name: string) {
    if (name.trim() == '' || this.placeholder)
      return;
    this.newEvent.emit({
      name: name,
      done: false
    });
    this.todoName = 'Add a todo...';
    this.placeholder = true;
  }
}
