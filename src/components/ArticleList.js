import React, { Component } from 'react'
import Article from "./Article"


export default class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state={
            articleId: null
        }
    }


    get body(){
        return this.props.articles.map((article) => 
            <li key = {article.id}>
                <Article 
                    article={article} 
                    toggleOpen={this.toggleOpenArticle}
                    isOpen={this.state.articleId === article.id}
                />
            </li>
        )
    }

    toggleOpenArticle = (articleId) => this.setState({articleId})

    render() {
        return (
            <ul>
                {this.body}
            </ul>
        )
    }
}
