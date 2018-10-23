import React from 'react'
import ShelfChanger from './ShelfChanger.js'

class Book extends React.Component {
  render() {
    return (
      <div>
        <li key={this.props.book.key}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                    style={{ width: 128, height: 193,
                             backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
                <ShelfChanger
                  book={this.props.book}
                  updateShelf={this.props.updateShelf}
                />
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
        </li>
      </div>
    )
  }
}

export default Book
