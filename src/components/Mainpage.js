import React from 'react';
import { Link, Route } from 'react-router-dom';
import Shelf from './Shelf.js';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-content">
          <Route exact path="/" render={() => (
            <div>
               <Shelf
                  name={"Currently Reading"}
                  id={"currentlyReading"}
                  books={this.props.books}
                  updateShelf={this.props.updateShelf}
                />
                <Shelf
                  name={"Want to Read"}
                  id={"wantToRead"}
                  books={this.props.books}
                  updateShelf={this.props.updateShelf}
                />
                <Shelf
                  name={"Read"}
                  id={"read"}
                  books={this.props.books}
                  updateShelf={this.props.updateShelf}
                />
            </div>
          )} />
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
  )}
}

MainPage.propTypes = {
  books: PropTypes.array
};

export default MainPage
