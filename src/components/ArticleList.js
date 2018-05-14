import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article/Article'
import toggleAccordion from '../decorators/toggleAccordion'
import {connect} from 'react-redux'

class ArticleList extends Component{

  static propTypes = {
    //from connect
    articles: PropTypes.array.isRequired,
    articleElements: PropTypes.object,
    article: PropTypes.object,
    toggle: PropTypes.func.isRequired
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('--', 'updating', nextProps);
  // }
  // componentWillMount() {
  //   console.log('--', 'mounting')
  // }
  // componentDidMount() {
  //   console.log('--', 'mounted')
  //   }

  render() {
    const{articles, toggle} = this.props
    const articleElements = articles.map(article =>
      <li key={article.id}>
        <Article
          article = {article}
          isOpen = {article.id === this.props.id}
          toggleOpen = {toggle(article.id)}
        />
      </li>)

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

}
export default connect(state => ({
  articles: state.articles,
  filterArticle: state.filterArticle
}))(toggleAccordion(ArticleList))
