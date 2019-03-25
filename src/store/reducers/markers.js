import { handleActions } from 'redux-actions'
import { LOAD_MARKERS_X, LOAD_MARKERS_Y, SAVE_MARKERS, GET_TARGET_MARKER } from '../types'

export default handleActions({
  [LOAD_MARKERS_X] (state, action) {
    return {
      ...state,
      Xmarkers: action.payload.Xmarkers
    }
  },
  [LOAD_MARKERS_Y] (state, action) {
    return {
      ...state,
      Ymarkers: action.payload.Ymarkers
    }
  },
  [SAVE_MARKERS] (state, action) {
    return {
      ...state,
      markers: Object.assign({}, state.markers, action.payload)
    }
  },
  [GET_TARGET_MARKER] (state, action) {
    const payload = action.payload
    let markers
    console.log(state, action)
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
  markers: {},
  Xmarkers: [],
  Ymarkers: []
})
