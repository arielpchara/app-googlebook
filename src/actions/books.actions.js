import fetch from 'isomorphic-fetch';

export const SEARCHING_BOOKS = 'SEARCHING_BOOKS';
export function searchingBooks() {
    return {
        type: SEARCHING_BOOKS
    }
};

export const FINDED_BOOKS = 'FINDED_BOOKS';
export function findedBooks(data, term) {
    return {
        type: FINDED_BOOKS,
        books: data.items || [],
        term: term
    }
}

export function fetchBooks(term) {
    return dispatch => {
        dispatch(searchingBooks());
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
            .then( res => res.json() )
            .then( json => dispatch(findedBooks(json, term)) )
    }
}

export function fetchBooksAsPossible(term) {
    return (dispatch, getState) => {
        if( !getState().books.isFetching ) {
            return dispatch(fetchBooks(term));
        } else {
            return Promise.resolve();
        }
    }
}