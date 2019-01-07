import React, { PureComponent } from 'react'
import CommentList from '../commentList/CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import "./style.css"
import { connect } from "react-redux"
import { deleteArticle } from "../../actions"

class Article extends PureComponent {

    handleClick = () => this.props.toggleOpen(this.props.article.id)

    handleDeleteArticle = () => this.props.deleteArticle(this.props.article.id);

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
        const { article, isOpen, deleteArticle } = this.props;
        return (
            <div>
                <h3>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick={this.handleDeleteArticle}>Delete</button>
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




export default connect(null, {deleteArticle})(Article)
