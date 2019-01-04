import React, { Component } from 'react'
import ArticleList from "./components/ArticleList"
import articles from "./fixtures"


class App extends Component {

  render() {
    return (
      <ArticleList articles={articles}/>
    )
  }
}

export default App
