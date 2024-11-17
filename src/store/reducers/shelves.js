import {
	compose, lfp, set, over, view,
} from '../lens'
import {
	booksF, shelvesF, sizeF,
} from '../fields'

const getEmptyShelf = () => ({ books: {}, size: 3 })

export const addShelf = (state, shelfId) => set(
	compose(shelvesF, lfp(shelfId)),
	state,
	getEmptyShelf(),
)

export const reduceShelfSize = (state, shelfId) => over(
	compose(shelvesF, lfp(shelfId), sizeF),
	state,
	prevSize => Math.max(prevSize - 1, 0),
)

export const increaseShelfSize = (state, shelfId) => over(
	compose(shelvesF, lfp(shelfId), sizeF),
	state,
	prevSize => prevSize + 1,
)

export const addEmptyBook = (state, shelfId, bookId) => {
	const shelfF = compose(shelvesF, lfp(shelfId))
	const size = view(compose(shelfF, sizeF), state)
	const books = view(compose(shelfF, booksF), state)

	const hasEnoughRoom = size > Object.keys(books).length

	if (!hasEnoughRoom) {
		return state
	}

	return set(compose(shelfF, booksF, lfp(bookId)), state, {
		author: '',
		title: '',
		color: '0',
	})
}
