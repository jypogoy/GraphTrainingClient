import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

    displayBookDetails() {
        const { book } = this.props.getBookQuery;
        if (book) {
            return (
                <div>
                    <h2>{ book.title }</h2>
                    <p>{ book.genre }</p>
                    <p>{ book.author.name } </p>
                    <h3>All books writted by this author:</h3>
                    <ul>
                        {
                            book.author.books.map(b => {
                                return <li key={ b.id }>{ b.title }</li>;
                            })
                        }
                    </ul>
                </div>
            );
        } else {
            return (<div><p>No book selected...</p></div>)
        }
    }

  render() {
    return (
      <div id="book-details">
         { this.displayBookDetails() }
      </div>
    )
  }
}

export default graphql(getBookQuery, {
    name: 'getBookQuery',
    options: (props) => {
        return {
            variables: {
                id: props.id // pass on as a query variable
            }
        }
    }
})(BookDetails);