import React from 'react'
import { Link, Route } from 'react-router-dom'
import Shelf from './Shelf.js'

class MainPage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-content">
          <Route exact path="/" render={() => (
            <Shelf />
          )} />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

        </div>
      </div>
    )}
  }

export default MainPage
