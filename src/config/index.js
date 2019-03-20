import school from './school'
import {markerStyle} from './map'

export default {
  DEBUG: true,
  env: __ENV_PROD__ ? 'xy-pro' : 'xy-dev',
  school,
  markerStyle
}
