import { handleActions } from 'redux-actions'
import { INIT_MUSIC_PLAYER } from '../types'

export default handleActions({
  [INIT_MUSIC_PLAYER] (state, action) {
    return {
      ...state,
      music: Object.assign({}, state.music, action.payload)
    }
  }
}, {
  music: {
    id: null,
    currentTime: 0
  }
})
