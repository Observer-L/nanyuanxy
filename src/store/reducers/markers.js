import { handleActions } from 'redux-actions'
import { SAVE_MARKERS, GET_TARGET_MARKER } from '../types'

export default handleActions({
  [SAVE_MARKERS] (state, action) {
    console.log(action.type, action.payload)
    return {
      markers: Object.assign({}, state.markers, action.payload)
    }
  },
  [GET_TARGET_MARKER] (state, action) {
    const payload = action.payload
    let markers
    if (payload.mode === 'you') {
      for (const m of state.markers.Ymarkers) {
        if (m.type === payload.type) {
          markers = m.data
          break
        }
      }
    } else {
      markers = state.markers.Xmarkers[0].data.concat(state.markers.Xmarkers[1].data)
    }
    return {
      ...state,
      marker: markers.filter(m => m.id === payload.id)[0]
    }
  }
}, {
  markers: {}
})
