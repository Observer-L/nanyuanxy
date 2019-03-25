// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command
const MAX_LIMIT = 100

// 云函数入口函数
exports.main = async (event, context) => {
  const XmarkersLost = await db.collection('xun_lost').where({
    status: _.eq(0)
  })
    .limit(MAX_LIMIT)
    .get()

  const XmarkersFound = await db.collection('xun_found').where({
    status: _.eq(0)
  })
    .limit(MAX_LIMIT)
    .get()

  return {
    Xmarkers: [
      {
        type: 'lost',
        icon: 'card@lost',
        data: XmarkersLost.data
      },
      {
        type: 'found',
        icon: 'card@found',
        data: XmarkersFound.data
      }
    ]
  }
}

