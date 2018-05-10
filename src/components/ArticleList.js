import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import toggleAccordion from '../decorators/toggleAccordion'

class ArticleList extends Component{

  static propTypes = {
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
export default toggleAccordion(ArticleList)
