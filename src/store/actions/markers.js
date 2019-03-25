import { createAction } from 'redux-actions'
import {LOAD_MARKERS_X, LOAD_MARKERS_Y, SAVE_MARKERS, GET_TARGET_MARKER} from '../types'

export const loadMarkersX = createAction(LOAD_MARKERS_X, () => {
  return new Promise(resolve => {
    wx.cloud.callFunction({
      name: 'loadMarkersX',
      success(res) {
        resolve(res.result)
      }
    })
  })
})


export const loadMarkersY = createAction(LOAD_MARKERS_Y, () => {
  return new Promise(resolve => {
    wx.cloud.callFunction({
      name: 'loadMarkersY',
      success(res) {
        resolve(res.result)
      }
    })
  })
})

export const saveMarkers = createAction(SAVE_MARKERS, payload => payload)
export const getTargetMarker = createAction(GET_TARGET_MARKER, payload => payload)
