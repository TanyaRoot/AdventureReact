import React, {Component as ReactComponent} from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
  static PropTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  state = {
    isOpen: false
  }

  toggleOpen = (ev) => {
    ev && ev.preventDefault && ev.preventDefault()
     // console.log('-', ev.nativeEvent)
     // debugger
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
