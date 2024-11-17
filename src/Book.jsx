import { colorF } from './store/fields'
import { compose, view } from './store/lens'
import { useStore } from './store/store'

export const Book = ({ bookId, bookF }) => {
	const color = useStore(state => view(compose(bookF, colorF), state))
	const background = `hsl(${color}, 70%, 35%)`

	return (
		<div className='book' style={{ background }}>{bookId}</div>
	)
}
