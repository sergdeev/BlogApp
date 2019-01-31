import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'
import { arrToMap } from './helpFunctions'

export default (commentsState = arrToMap(normalizedComments), action) => {
  const { type, payload, randomId } = action
  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentsState,
        [randomId]: {
          ...payload.comment,
          id: randomId
        }
      }

    default:
      return commentsState
  }
}
