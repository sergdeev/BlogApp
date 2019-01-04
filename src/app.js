import React, { Component } from 'react';
import ArticleList from "./components/ArticleList";
import articles from "./fixtures";
import Select from "react-select";

class App extends Component {
  constructor() {
    super();
    this.state={
      openItem: null
    } 
  }
 

  get options(){
    return articles.map(article =>({
      label: article.title,
      value: article.id
    }))
  }

  handleSelect = openItem => this.setState({openItem})

  render() {
    return (
      <div>
        <Select options={this.options} value={this.state.openItem} onChange={this.handleSelect}/>
        <ArticleList articles={articles}/>
      </div>
    )
  }
}

export default App
