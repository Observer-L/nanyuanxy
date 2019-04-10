// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async () => {
  const expires_in = 7200 + Math.round(new Date().getTime() / 1000)
  const access_token = await cloud.callFunction({
    name: 'getAccessToken'
  })

  await cloud.database().collection('access_token').doc('XKtAj1sqTi00tq-W').set({
    data: {
      access_token: access_token.result.access_token,
      expires_in
    }
  })

  return {}
}
