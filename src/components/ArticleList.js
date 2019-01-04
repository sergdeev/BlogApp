import React, { Component } from 'react'
import Article from "./Article"
import Accordion from "../HOC/Accordion"


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


export default Accordion(ArticleList);