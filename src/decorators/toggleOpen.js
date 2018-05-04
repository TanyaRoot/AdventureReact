import React, {Component as ReactComponent} from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
  state = {
    isOpen: false
  }

  toggleOpen = (ev) => {
    ev && ev.preventDefault && ev.preventDefault()
    // console.log('-', ev.nativeEvent)
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return <OriginalComponent
      {...this.props}
      {...this.state}
      toggleOpen = {this.toggleOpen} />
  }

}
