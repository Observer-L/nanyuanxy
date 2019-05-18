import school from './school'
import {markerStyle} from './map'
import areas from './areas'
import itemTypes from './itemTypes'
import panorama from './panorama'

export default {
  version: '0.3.0',
  DEBUG: false, // true调用本地数据, false使用云开发能力
  env: __ENV_PROD__ ? 'xy-pro' : 'xy-dev',
  school,
  markerStyle,
  areas,
  itemTypes,
  panorama
}
