import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Calendar from './Filters/Calendar'
import Counter from './Counter'
import {connect} from 'react-redux'


class App extends Component {

  state = {
    selection: null
  }

  changeSelection = selection => this.setState({selection})
  render() {
    console.log('*-*-*-*', this.props);
    const options = this.props.articles.map(article => ({
                                  label: article.title,
                                  value: article.id
    }))

    return (
      <div>
        <Counter />
        <UserForm />
        <Select options = {options}
              value = {this.state.selection}
              onChange={this.changeSelection}
              multi />
        <Calendar />
        <ArticleList />
      </div>
    )
  }

}

export default connect(state => {
    return {articles : state.articles}
})(App)
