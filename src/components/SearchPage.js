import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

const SearchPage = ({ results, updateSearch, query, updateShelf, books}) => {

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
            value={query}
            onChange={e => updateSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results &&
            results.map((book) => {
              const { id, imageLinks, authors, title } = book;
              return (
                <li key={id}>
                  <Book
                    book={book}
                    url={imageLinks ? imageLinks.thumbnail : null}
                    title={title}
                    author={authors ? authors : ''}
                    currentShelf={returnShelf(book, books)}
                    updateShelf={updateShelf}
                  />
                </li>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default SearchPage
