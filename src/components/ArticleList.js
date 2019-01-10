import React, { Component } from 'react'
import Article from "./article/Article"
import Accordion from "../HOC/Accordion"
import { connect } from 'react-redux'
import { filteredArticles } from "../selectors"


class ArticleList extends Component {

    get body(){
        const { toggleOpenItem, articles, openItemId } = this.props;
        return articles.map((article) => 
            <li key = {article.id}>
                <Article 
                    article={article} 
                    toggleOpen={toggleOpenItem}
                    isOpen={openItemId === article.id}
                />
            </li>
        )
    }

    render() {
        return (
            <ul>
                {this.body}
            </ul>
        )
    }
}



export default connect((storeState) => {
    return{
        articles: filteredArticles(storeState)
    }
})(Accordion(ArticleList));