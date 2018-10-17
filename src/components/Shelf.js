import React from 'react'
import Book from './Book.js'

class Shelf extends React.Component {
  constructor(props) {
    super();
    this.shelves = ['Currently Reading', 'Want to Read', 'Read'];
  }

  render() {
    return (
      <div>
        {this.shelves.map(i => {
          return <div className="bookshelf">
                    <h2 className="bookshelf-title">{i}</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          <li>
                            <Book />
                          </li>
                        </ol>
                      </div>
                  </div>
        })}
      </div>
    )
  }
}

export default Shelf
