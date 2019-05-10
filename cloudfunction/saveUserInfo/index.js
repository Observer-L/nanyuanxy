// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  if (event.new) {
    await db.collection('users').add({
      data: {
        openid: wxContext.OPENID,
        ...event
      }
    })
  } else {
    await db.collection('users').where(
      {openid: _.eq(wxContext.OPENID)}
    ).update({
      data: event
    })
  }

  return {}
}
