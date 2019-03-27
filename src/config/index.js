import school from './school'
import {markerStyle} from './map'

export default {
  DEBUG: true, // true调用本地数据, false使用云开发能力
  env: __ENV_PROD__ ? 'xy-pro' : 'xy-dev',
  school,
  markerStyle
}
