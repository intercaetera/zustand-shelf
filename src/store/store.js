import { create } from 'zustand'
import { convertReducersToActions } from './utils'

import * as shelvesReducers from './reducers/shelves'

const initialState = {
	shelves: [],
}

export const useStore = create(set => ({
	...initialState,
	...convertReducersToActions(set, shelvesReducers),
}))
