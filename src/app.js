import React, { Component } from 'react';
import ArticleList from "./components/ArticleList";
import articles from "./fixtures";
import UserForm from "./components/UserForm";
import Filters from './components/Filters'
import Counter from './components/Counter';

class App extends Component {


  render() {
    return (
      <div>
        <UserForm/>
        <Counter/>
        <Filters articles={articles} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
