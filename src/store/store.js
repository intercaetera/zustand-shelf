import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { convertReducersToActions } from './utils'

import * as shelvesReducers from './reducers/shelves'

const initialState = {
	shelves: [],
}

export const useStore = create(devtools(set => ({
	...initialState,
	...convertReducersToActions(set, shelvesReducers),
})))
