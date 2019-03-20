import school from './school'

export default {
  env: __ENV_PROD__ ? 'xy-pro' : 'xy-dev',
  school
}
