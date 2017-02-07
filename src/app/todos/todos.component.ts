import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: '[app-todos]',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {

  @Input() todos: Todo[];
  @Output("remove") removeEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output("toggle") toggleEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  Remove(index: number) {
    this.removeEvent.emit(this.todos[index])
  }

  Toggle(index: number) {
    this.toggleEvent.emit(this.todos[index])
  }

}
