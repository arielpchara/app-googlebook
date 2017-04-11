import React from 'react';

class Book extends Comment {
    constructor(props) {
        super(props);
        const {params} = props;
        this.bookName = params.id;
    }
    render() {
        return (
            <div className='container'>
                <h1>{this.bookName}</h1>
            </div>
        )
    }
}

export default Book;