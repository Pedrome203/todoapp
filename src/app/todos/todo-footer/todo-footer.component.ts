import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';
import { clearTodos } from '../todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})


export class TodoFooterComponent implements OnInit {

  currentFilter: actions.validFilters = 'all'
  filters: any[] = [{ text: 'todos', code: 'all' }, { text: 'completados', code: 'completed' }, { text: 'pendientes', code: 'pending' }]
  pendingNumber: number = 0

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter => {
    //   this.currentFilter = filter
    // })
    this.store.subscribe(state => {
      this.currentFilter = state.filter
      this.pendingNumber = state.todos.filter(todo => !todo.completed).length
    })
  }

  changeFilter(filter: actions.validFilters) {
    console.log(filter)
    this.store.dispatch(actions.setFilter({ filter: filter }))
  }

  clearTodos() {
    this.store.dispatch(clearTodos())

  }

}
