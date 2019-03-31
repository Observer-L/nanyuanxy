import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

export function formatTime2Duration(time) {
  // https://momentjs.com/docs/#/durations
  time = parseInt(time)
  return moment(moment.duration(time, 'seconds')._data).format('mm:ss')
}

export function format2FullTime(time) {
  const format = 'YYYY-M-D a h:mm'
  return moment(time).format(format)
}
