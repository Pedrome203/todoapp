import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] create todo', props<{ text: string }>());
export const toggle = createAction('[TODO] toggle todo', props<{ id: number }>());
export const toggleAll = createAction('[TODO] toggle all todos', props<{ completed: boolean }>());
export const edit = createAction('[TODO] edit todo', props<{ id: number, text: string }>());
export const deleteTodo = createAction('[TODO] delete todo', props<{ id: number }>());
export const clearTodos = createAction('[TODO] clear todos');