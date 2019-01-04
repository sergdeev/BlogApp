import React, { Component } from 'react';

export default (OriginalComponent) => class DecoratedComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            openItemId: null
        }
    }

    toggleOpenItem = (openItemId) => this.setState({openItemId})

    render() {
        return (
            <OriginalComponent 
                {...this.props} 
                {...this.state} 
                toggleOpenItem={this.toggleOpenItem}
            />
        )
    }
}
