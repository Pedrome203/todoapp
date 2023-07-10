import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.action'
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl
  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('Hola', Validators.required)
  }
  add() {
    if (!this.textInput.invalid) {
      this.store.dispatch(actions.create({ text: this.textInput.value }))
      this.textInput.reset()
    }

  }

  ngOnInit(): void {
  }

}
