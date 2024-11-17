import { ArrowLeftToLine, ArrowRightFromLine, Plus } from 'lucide-react'

import { Book } from './Book'

import { view, compose, lfp } from './store/lens'
import { booksF, shelvesF, sizeF } from './store/fields'
import { useStore } from './store/store'

export const Bookshelf = ({ shelfId }) => {
	const shelfSizeF = compose(shelvesF, lfp(shelfId), sizeF)
	const size = useStore(state => view(shelfSizeF, state))

	const shelfBooksF = compose(shelvesF, lfp(shelfId), booksF)
	const books = useStore(state => view(shelfBooksF, state))

	const reduceShelfSize = useStore(s => s.reduceShelfSize)
	const increaseShelfSize = useStore(s => s.increaseShelfSize)
	const addEmptyBook = useStore(s => s.addEmptyBook)

	const width = `${size}rem`

	return (
		<div className='bookshelf' style={{ width }}>
			<div className='bookshelf-menu'>
				<button title='Reduce size' onClick={() => reduceShelfSize(shelfId)}><ArrowLeftToLine /></button>
				<button title='Increase size' onClick={() => increaseShelfSize(shelfId)}><ArrowRightFromLine /></button>
				<button title='Add book' onClick={() => addEmptyBook(shelfId, Date.now())}><Plus /></button>
			</div>
			<div className='books'>
				{Object.keys(books).map(bookId => (
					<Book key={bookId} bookId={bookId} bookF={compose(shelfBooksF, lfp(bookId))} />
				))}
			</div>
		</div>
	)
}
