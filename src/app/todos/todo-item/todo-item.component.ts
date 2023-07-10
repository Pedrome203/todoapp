import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo
  @ViewChild('myInput') myInputText!: ElementRef;
  checkCompleted!: FormControl
  textInput!: FormControl
  editing: boolean = false
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed)
    this.textInput = new FormControl(this.todo.text, Validators.required)
    this.checkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
  }

  edit() {
    this.editing = true
    this.textInput.setValue(this.todo.text)
    setTimeout(() => {
      this.myInputText.nativeElement.select()
    }, 1)
  }

  deleteTodo() {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }))
  }
  editFinished() {
    this.editing = false
    if (!(this.textInput.invalid || this.textInput.value === this.todo.text)) {
      this.store.dispatch(actions.edit({ id: this.todo.id, text: this.textInput.value }))
    }

  }
}
