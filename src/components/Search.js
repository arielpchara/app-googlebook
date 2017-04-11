import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputSearch from './InputSearch';

const Book = ({book}) => (
    <div>
        <strong>{book.volumeInfo.title}</strong>
        <p>
            {book.volumeInfo.description}
            { !book.volumeInfo.description && <span>sem descrição</span> }
        </p>
    </div>
);

const Books = ({books}) => (
    <div>
        { books.map( book => <Book book={book} key={book.id}/> ) }
    </div>
);

const NoResults = () => (
    <div className="text-center">Sem resuldados</div>
)

class Search extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {books, term} = this.props.books;
        return (
            <div className="container">
                <h1 className="text-center">
                    <i className="fa fa-book" style={{color:'blue'}} ></i> &nbsp; Google Book
                </h1>
                <InputSearch />
                <br/>
                <Books books={books} />
                { (books.length == 0 && term) &&  <NoResults/> }
            </div>
        )
    }
};


export default connect( state => state )(Search);