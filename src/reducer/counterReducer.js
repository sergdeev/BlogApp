import { INCREMENT } from '../constants'

export default (counerState = 0, action) => {
  return action.type === INCREMENT ? counerState + 1 : counerState
}
