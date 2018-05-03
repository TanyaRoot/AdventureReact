import React, {Component} from 'react'
import Comment from './Comment'

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isOpen2: false
    }
  }

  getBody() {
    if (!this.state.isOpen) {
      return null
    }
    else {
      const {article} = this.props
      const {isOpen2} = this.state
      return (
        <div>
          <section>{article.text}</section>
          <button onClick = { () => this.setState({isOpen2: !this.state.isOpen2}) }>
            {isOpen2 ? 'close' : 'open'}
          </button>
           {this.getComments(article)}
        </div>
      )
    }
  }

  getComments(article) {
    if (!this.state.isOpen2) {
      return null
    }
    else {
      const comm = article.comments.map((commText) => <li key={commText.id}><Comment commText={commText} /></li>)
      return (
        <ul>
          {comm}
        </ul>
      )
    }
  }

  render() {
    const {article} = this.props
    const {isOpen} = this.state
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = { () => this.setState({isOpen: !this.state.isOpen}) }>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

}
