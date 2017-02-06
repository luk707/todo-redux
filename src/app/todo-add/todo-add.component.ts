import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../models';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent {
  @Output("new") newEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  NewTodo(name: string) {
    this.newEvent.emit({
      name: name,
      done: false
    });
  }
}
