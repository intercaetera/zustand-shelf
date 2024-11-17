import { shelvesF } from './store/fields'
import { view } from './store/lens'
import { useStore } from './store/store'

import { Bookshelf } from './Bookshelf'

export const App = () => {
	const addShelf = useStore(state => state.addShelf)

	const shelves = useStore(state => view(shelvesF, state))

	return (
		<div>
			{Object.keys(shelves).map(shelfId => (
				<Bookshelf key={shelfId} shelfId={shelfId} />
			))}
			<button onClick={() => addShelf(Date.now())}>+ Add bookshelf</button>
		</div>
	)
}
