import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrToMap } from './helpFunctions'

export default (articlesState = arrToMap(defaultArticles), action) => {
  const { type, payload, randomId } = action
  switch (type) {
    case DELETE_ARTICLE:
      const articlesCopy = { ...articlesState }
      delete articlesCopy[payload.id]
      return articlesCopy

    case ADD_COMMENT:
      const article = articlesState[payload.articleId]
      return {
        ...articlesState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }
  }
  return articlesState
}
