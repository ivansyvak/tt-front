import { Action } from '@ngrx/store';
import { Client } from '../_models/client';

export interface SearchAction extends Action {
    payload: any;
}

export interface SearchState {
    clients: Client[];
}

const defaultSearchState: SearchState = {clients: []};

export function searchReducer(state: SearchState = defaultSearchState, action: SearchAction) {
    return {...state};
}
