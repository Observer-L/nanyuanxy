import { createAction } from 'redux-actions'
import {SAVE_MARKERS} from '../types'

// export const actionCreators = createActions({
//   [SAVE_MARKERS]: (payload) => {
//     console.log(payload, 'in actionCreators')
//     return payload
//   }
// })

//
// export const loadMarkers = createAction(LOAD, () => {
//   return new Promise(resolve => {
//     //  TODO 读取云数据库
//     resolve(123)
//   })
// })
//
export const saveMarkers = createAction(SAVE_MARKERS, payload => payload)
