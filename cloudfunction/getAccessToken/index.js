// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')

cloud.init()

import {APP_SECRET as secret} from '../config'

// 云函数入口函数
exports.main = async () => {
  const appid = 'wxc50d144ec6dee31c'

  const accessTokenOptions = {
    method: 'GET',
    url: 'https://api.weixin.qq.com/cgi-bin/token',
    qs: {
      appid,
      secret,
      grant_type: 'client_credential'
    },
    json: true
  }

  const resultValue = await rp(accessTokenOptions)
  const access_token = resultValue.access_token

  return {
    access_token
  }
}
