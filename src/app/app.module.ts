import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreService } from './store.service';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
