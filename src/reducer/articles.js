import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'


export default (articleState = defaultArticles, action) => {

  const {type, ...opt} = action
  // debugger
  // console.log('--------jjj', typeof ...opt);
  // debugger
  switch (type) {

    case DELETE_ARTICLE: {
      // debugger
    return articleState.filter(article => article.id !== opt.payload.id)
  }

    case FILTER_ARTICLE: {
      // debugger
if (!opt.range.to) return articleState

    const articleArr = []
    articleState.filter(i => {
      debugger
      if   (new Date(i.date) > opt.range.from && new Date(i.date) < opt.range.to) {

        console.log(i);
        return articleArr.push(i)
        }
      })
      console.log(articleArr);
      return articleState = articleArr
    }
    default: {
      return articleState
    }

 }
}
