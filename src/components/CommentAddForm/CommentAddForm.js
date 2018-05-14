import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentAddForm extends Component {
  static propTypes = {
  }

  state = {
    user: "",
    text: ""
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.setState({
      user: '',
      text: ''
    })
  }

  handleChange = type => ev => {
    // console.log(type);
    const {value} = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }

  getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? 'form-input__error' : '';

  render() {
    // console.log('11', this.getClassName('user'));
    // console.log(this.getClassName('text'));
    return(
      <form onSubmit = {this.handleSubmit}>
        user: <input value = {this.state.user}
                     onChange = {this.handleChange('user')}
                     className = {this.getClassName('user')} />
        comment: <input value = {this.state.text}
                        onChange = {this.handleChange('text')}
                        className = {this.getClassName('text')} />
        <input type = 'submit' value='submit' />
      </form>
    )
  }

}
const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 50
  }
}

export default CommentAddForm
