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
      query: '',
      results: [],
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
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll()
        .then((books) => {
          this.setState({
            books: books,
          });
        });
    })
  }

  updateSearch = (query) => {
    this.setState({
      query: query,
    });

    BooksAPI.search(query)
      .then((results) => {
        this.setState({
          results: results,
        });
      })
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
            updateSearch={this.updateSearch}
            results={this.state.results}
            query={this.state.query}
          />
        )} />
      </div>
    )
  }
}

export default App
