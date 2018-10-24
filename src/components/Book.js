import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger.js'

class Book extends React.Component {
  render() {
    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                    style={{ width: 128, height: 193,
                             backgroundImage: `url("${this.props.url}")` }}></div>
                <ShelfChanger
                  book={this.props.book}
                  currentShelf={this.props.currentShelf}
                  updateShelf={this.props.updateShelf}
                />
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.author}</div>
          </div>
        </li>
      </div>
    )
  }
}

Book.propTypes = {
  currentShelf: PropTypes.func,
  updateShelf: PropTypes.func,
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Book
