import React from 'react'
import Book from './Book.js'

class Shelf extends React.Component {
  render() {
    let list = this.props.books
      .filter((book) => book.shelf === this.props.id)
      .map((book) =>
        <li key={book.id}>
          <Book
            book={book}
            url={book.imageLinks ? book.imageLinks.thumbnail : ''}
            title={book.title}
            author={book.authors ? book.authors : ''}
            currentShelf={book.shelf ? book.shelf : ''}
            updateShelf={this.props.updateShelf}
          />
        </li>
    );

    return (
      <div>
        <div className="bookshelf" key={this.props.id}>
          <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {list}
              </ol>
            </div>
        </div>
      </div>
    )
  }
}

export default Shelf
