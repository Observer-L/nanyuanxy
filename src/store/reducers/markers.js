import { handleActions } from 'redux-actions'
import { SAVE_MARKERS } from '../types'

export default handleActions({
  [SAVE_MARKERS] (state, action) {
    console.log(action.type, action.payload)
    return {
      markers: Object.assign({}, state.markers, action.payload)
    }
  }
}, {
  markers: {}
})
