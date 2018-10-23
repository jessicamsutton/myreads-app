import React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header.js'
import MainPage from './components/Mainpage.js'
import SearchPage from './components/SearchPage.js'
import './App.css'
import * as BooksAPI from './BooksAPI.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books,
        });
      }
    );
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books,
        });
      }
    );
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Header />
        )} />
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )} />
      </div>
    )
  }
}

export default App
