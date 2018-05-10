import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentAddForm extends Component {
  static propTypes = {
  }

  state = {
    user: "",
    text: ""
  }

  render() {
    return (
      <div>
        <form>
          <p>Add Comment</p>
          <label><p>user: <input type='user'
                       value={this.state.user}
                       onChange = {this.handleCommentChangeUser} /></p></label>
          <label><p>text: <input type='text'
                       value={this.state.text}
                       onChange = {this.handleCommentChangeText} /></p></label>
        </form>
      </div>
    )
  }

  handleCommentChangeUser = (ev) => {
    ev.target.style.backgroundColor = "white"
    if (ev.target.value.length < 5) {
      ev.target.style.backgroundColor = "red"
    }
    if (ev.target.value.length > 15) {
      ev.target.style.backgroundColor = "red"
    }
    this.setState({
      user: ev.target.value
    })
  }

  handleCommentChangeText = (ev) => {
    ev.target.style.backgroundColor = "white"
    if (ev.target.value.length < 20) {
      ev.target.style.backgroundColor = "red"
    }
    if (ev.target.value.length > 50) {
      ev.target.style.backgroundColor = "red"
    }
    this.setState({
      text: ev.target.value
    })
  }

}

export default CommentAddForm
