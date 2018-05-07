import React, {Component as ReactComponent} from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class WrappedCompAccordion extends ReactComponent {
// static propTypes = {}
  state = {
    id: null
  }

  toggle = id => ev => {
    this.setState({
      id: this.state.id === id ? null : id
    })
  }

  render() {
        return <OriginalComponent
          {...this.props}
          {...this.state}
          toggle = {this.toggle} />
    }
}
