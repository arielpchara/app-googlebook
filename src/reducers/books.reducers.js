import { SEARCHING_BOOKS, FINDED_BOOKS } from '../actions/books.actions';

const defaultState = {
    isFetching: false,
    books: [],
    last_book_open: {}
}

function findedBooks(state, books, term) {;
    return {
        ...state,
        isFetching: false,
        term: term,
        books: books
    }
}

const books = (state=defaultState, action) => {
    switch(action.type) {
        case FINDED_BOOKS:
            return findedBooks(state, action.books, action.term);
        case SEARCHING_BOOKS:
            return {
                ...state,
                isFetching: true
            }
        default: 
            return state;
    }
}

export default books;