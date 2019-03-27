import { createAction } from 'redux-actions'
import {INIT_MUSIC_PLAYER} from '../types'

export const initMusicPlayer = createAction(INIT_MUSIC_PLAYER, payload => payload)
