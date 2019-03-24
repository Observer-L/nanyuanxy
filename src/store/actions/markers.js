import { createAction } from 'redux-actions'
import {SAVE_MARKERS, GET_TARGET_MARKER} from '../types'

//
// export const loadMarkers = createAction(LOAD, () => {
//   return new Promise(resolve => {
//     //  TODO 读取云数据库
//     resolve(123)
//   })
// })
//

export const saveMarkers = createAction(SAVE_MARKERS, payload => payload)
export const getTargetMarker = createAction(GET_TARGET_MARKER, payload => payload)
