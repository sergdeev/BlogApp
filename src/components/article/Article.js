import React, { PureComponent } from 'react'
import CommentList from '../commentList/CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import "./style.css"

export default class Article extends PureComponent {

    handleClick = () => this.props.toggleOpen(this.props.article.id)

    get body() {
        const { isOpen, article } = this.props
        if (!isOpen) return null
    
        return (
          <section>
            {article.text}
            <CommentList comments={article.comments} />
          </section>
        )
    }

    render() {
        const { article, isOpen } = this.props;
        return (
            <div>
                <h3>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                <CSSTransition 
                    transitionName="article" 
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.body}
                </CSSTransition>
            </div>
        )
    }
}
