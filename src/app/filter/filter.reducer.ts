import { createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'all' as validFilters

export const filterReducer = createReducer(
    initialState,
    on(setFilter, (state, { filter }) => filter),



);

