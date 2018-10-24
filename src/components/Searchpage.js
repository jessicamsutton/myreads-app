import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={e => this.props.updateSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.results &&
              this.props.results
                .map((book) =>
                    <Book
                      book={book}
                      key={book.id}
                      url={book.imageLinks ? book.imageLinks.thumbnail : ''}
                      title={book.title}
                      author={book.authors ? book.authors : ''}
                      currentShelf={book.shelf}
                      updateShelf={this.props.updateShelf}
                    />
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
