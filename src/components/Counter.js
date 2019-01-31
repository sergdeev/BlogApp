import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions'

class Counter extends Component {
  //    handleIncrement = () => {
  //        this.props.dispatch(increment())
  //    };

  render() {
    const { number, handleIncrement } = this.props
    return (
      <div>
        <h3>{number}</h3>
        <button onClick={handleIncrement}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => ({
  number: storeState.counter
})

const mapDispatchToProps = {
  handleIncrement: increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
