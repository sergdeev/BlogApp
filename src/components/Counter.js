import React, { Component } from 'react'
import { connect } from "react-redux"

class Counter extends Component {

    handleIncrement = () => {
        this.props.dispatch({ type: "INCREMENT" })
    };

    render() {
        const { number, increment } = this.props
        return (
            <div>
                <h3>{number}</h3>
                <button onClick={this.handleIncrement}>increment</button>
            </div>
        )
    }
}

const mapStateToProps = (storeState) => ({
    number: storeState.counter
})

export default connect(mapStateToProps)(Counter)
