import { createReducer, on } from '@ngrx/store';
import { create, toggle, edit, deleteTodo, toggleAll, clearTodos } from './todo.action';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [new Todo('Salvar al mundo')];

export const todoReducer = createReducer(
    initialState,
    on(create, (state, { text }) => [...state, new Todo(text)]),
    on(clearTodos, (state) => state.filter(todo => !todo.completed)),
    on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo
            }
        })
    }),
    on(toggleAll, (state, { completed }) =>
        state.map(todo => {

            return {
                ...todo,
                completed: completed
            }

        })
    ),
    on(edit, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: text
                }
            } else {
                return todo
            }
        })
    }),
);

