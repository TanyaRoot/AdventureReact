import React from 'react'
import { render } from 'react-dom'
import ArticleList from './ArticleList'
import { articles } from './fixtures' //статьи

render (<ArticleList articles = {articles} />, document.getElementById('container'))
