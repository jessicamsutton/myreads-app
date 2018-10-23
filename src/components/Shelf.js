import React from 'react'
import Book from './Book.js'

class Shelf extends React.Component {
  render() {
    const books = this.props.books;
    let list = books
      .filter((book) => book.shelf === this.props.id)
      .map((book) =>
        <Book
          book={book}
          updateShelf={this.props.updateShelf}
        />
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
