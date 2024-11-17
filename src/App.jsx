import { useStore } from './store/store'

export const App = () => {
	const addShelf = useStore(s => s.addShelf)

	return (
		<div>
			<button onClick={addShelf}>+ Add bookshelf</button>
		</div>
	)
}
