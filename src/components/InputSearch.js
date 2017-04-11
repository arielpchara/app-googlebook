import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchBooksAsPossible} from '../actions/books.actions';

class InputSearch extends Component {
    
    
    constructor () {
        super();
        this.term = '';
    }

    changeInput(e) {
        this.term = e.target.value;
    }

    onSubmit(e) {
        e.preventDefault();
        if( this.term.length > 0 ) {
            this.props.dispatch(fetchBooksAsPossible(this.term));
        }
    }

    render() {
        return (
            <form noValidate onSubmit={ e => this.onSubmit(e) }>
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-md-offset-2">
                        <div className="input-group">
                            <div className="form-group">
                                <input type="text" disabled={this.props.books.isFetching} className="form-control" onChange={ e=>this.changeInput(e) }/>
                            </div>
                            <div className="input-group-btn">
                                <button className="btn btn-primary"> buscar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


export default connect( state => state )(InputSearch);