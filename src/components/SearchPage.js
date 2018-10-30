import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

function SearchPage(props) {

  function returnShelf(book, books) {
    let foundBook = books.filter(b => b.id === book.id);

    if (foundBook.length !== 0) {
      return foundBook[0].shelf;
    } else {
      return 'none';
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={props.query}
            onChange={e => props.updateSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.results &&
            props.results.map((book) =>
                <li key={book.id}>
                  <Book
                    book={book}
                    url={book.imageLinks ? book.imageLinks.thumbnail : null}
                    title={book.title}
                    author={book.authors ? book.authors : ''}
                    currentShelf={returnShelf(book, props.books)}
                    updateShelf={props.updateShelf}
                  />
                </li>
            )
          }
        </ol>
      </div>
    </div>
  )
}

export default SearchPage
