import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentAddForm from './CommentAddForm'

function CommentList({comments = [], isOpen, toggleOpen}) {

  CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    text: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func,
    comment: PropTypes.object
  }

  const text = isOpen ? 'close comments' : 'open comments'
  return (
    <div>
      <button onClick = {toggleOpen}>
        {text}
      </button>
      {getBody({comments, isOpen})}
      <CommentAddForm />
    </div>
  )
}

function getBody({comments, isOpen}) {
  if (!isOpen) {
    return null
  }
  if (!comments.length) {
   return <p>No comments yet</p>
  }
  return (
    <ul>
      {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
    </ul>
  )
}

export default toggleOpen(CommentList)
