// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const xf = await db.collection('xun_found').where({
    _openid: _.eq(wxContext.OPENID)
  })
    .get()

  const xl = await db.collection('xun_lost').where({
    _openid: _.eq(wxContext.OPENID)
  })
    .get()

  return {
    lostMarkers: xl,
    foundMarkers: xf
  }
}
