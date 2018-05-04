import React, {Component} from 'react'
import PropTypes from 'prop-types'

function Comment({comment}) {
  
  Comment.propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  }

  return (
    <div>
      <p>{comment.text}<b>by {comment.user}</b></p>
    </div>
  )
}

export default Comment
