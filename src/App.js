import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Header from './components/Header.js'
import MainPage from './components/Mainpage.js'
import SearchPage from './components/Searchpage.js'
import './App.css'

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Header />
        )} />
        <Route exact path="/" render={() => (
          <MainPage />
        )} />
        <Route path="/search" render={() => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default App
