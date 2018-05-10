import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import 'react-select/dist/react-select.css'
import Calendar from './Calendar'
import Counter from './Counter'

class App extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <Counter />
        <UserForm />
        <Calendar />
        <ArticleList />
      </div>
    )
  }

}

export default App
