import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

function SearchPage (props) {
  
  function returnShelf(book, books) {
    if (books.filter(b => book.id === b.id).length !== 0) {
      return book.shelf;
    } else {
      return 'none'
    }
  };

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
            props.results
              .map((book) =>
                  <Book
                    book={book}
                    key={book.id}
                    url={book.imageLinks ? book.imageLinks.thumbnail : ''}
                    title={book.title}
                    author={book.authors ? book.authors : ''}
                    currentShelf={returnShelf(book, props.books)}
                    updateShelf={props.updateShelf}
                  />
            )
          }
        </ol>
      </div>
    </div>
  )
}

export default SearchPage
