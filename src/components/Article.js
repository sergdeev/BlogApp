import React, { PureComponent } from 'react'



export default class Article extends PureComponent {

    handleBtnClick = () => this.props.toggleOpen(this.props.article.id)

    render() {
        const { article, isOpen } = this.props;
        return (
            <div>
                <div>
                    <h3>{article.title}</h3>
                    <button onClick={this.handleBtnClick}>{isOpen? 'close' : 'open'}</button>
                </div>
                {isOpen && <section>{article.text}</section>}
            </div>
        )
    }
}
