import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StoreService } from './store.service';
import { State, Todo, User } from './models';
import { TodosComponent } from './todos/todos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public state: State;
  constructor(private storeService: StoreService) {
    this.Update(storeService.Store);
    storeService.Subscribe(() => {
      this.Update(storeService.Store);
    });
  }
  public Update(state: State): void {
    this.state = state;
  }
  public ToggleTodo(todo: Todo): void {
    this.storeService.Dispatch({ type: "TODO_TOGGLE", payload: todo })
  }
  public RemoveTodo(todo: Todo): void {
    this.storeService.Dispatch({ type: "TODO_REMOVE", payload: todo })
  }
  public NewTodo(todo: Todo): void {
    this.storeService.Dispatch({ type: "TODO_NEW", payload: todo })
  }
}
