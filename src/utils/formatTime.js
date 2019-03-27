var moment = require('moment');

export function formatTime2Duration(time) {
  // https://momentjs.com/docs/#/durations
  time = parseInt(time)
  return moment(moment.duration(time, 'seconds')._data).format('mm:ss')
}
