import { combineReducers } from 'redux'
import markers from './markers'
import musicPlayer from './music-player'

export default combineReducers({
  markers,
  musicPlayer
})
