import { combineReducers } from 'redux'
import books from './books.reducers'

const store = combineReducers({
    books
});

export default store;