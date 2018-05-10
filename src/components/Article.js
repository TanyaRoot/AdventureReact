import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import {findDOMNode} from 'react-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'

class Article extends PureComponent {

  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  state = {
    updateIndex: 0
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('--', 'updating', this.props.isOpen, nextProps.isOpen);
  // }
  //
  // componentWillMount() {
  //   console.log('--', 'mounting')
  // }
  // componentDidMount() {
  //   console.log('--', 'mounted')
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isOpen !== this.props.isOpen
  // }

  getBody() {
    const {article, isOpen} = this.props
    if (!isOpen) {
      return null
    }
    else {
      return (
          <section>
            {article.text}
            <CommentList comments = {article.comments} ref={this.setCommentsRef}/>
          </section>
      )
    }
  }

  setContainerRef = ref => {
    this.container = ref
    console.log('--ref-', ref)
  }

  setCommentsRef = ref => {
    // console.log('----', findDOMNode(ref))
    console.log('----', ref)
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props
    console.log('update');
    return (
      <div ref = {this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
          <CSSTransitionGroup
          transitionName='article'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
          component = 'div'>
          {this.getBody()}
          </CSSTransitionGroup>
      </div>
    )
  }

}

export default Article
