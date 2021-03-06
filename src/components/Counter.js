import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC/index'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick = {this.handleIncrement}>INCREMENT ME</button>
      </div>
    )
  }

  handleIncrement = () => {
    // console.log('---incrementing')
    const {increment} = this.props
    increment()
  }
}

export default connect((state) => ({
  counter: state.count
}), { increment })(Counter)
