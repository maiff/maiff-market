import baseUrl from '../common/baseUrl.js'
import axios from 'axios'
import store from '../../store/'
import initGeetest from 'initGeetest'

let handlerPopupMobile = function (captchaObj, fn) {
        // 将验证码加到id为captcha的元素里
  if (store.state.autoInfo.captchaObj === null) {
    captchaObj.appendTo(document.getElementById('popup-captcha-mobile'))
    store.commit('setCaptchaObj', captchaObj)
  } else {
    store.state.autoInfo.captchaObj.refresh()
  }
        // 拖动验证成功后两秒(可自行设置时间)自动发生跳转等行为
  captchaObj.onSuccess(function () {
    let validate = captchaObj.getValidate()
    // console.log(store.state.autoInfo.username)
    axios.post(`${baseUrl}/login`, {
      geetest_challenge: validate.geetest_challenge,
      geetest_validate: validate.geetest_validate,
      geetest_seccode: validate.geetest_seccode,
      username: store.state.autoInfo.username,
      password: store.state.autoInfo.password
    },
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: [function (data) {
        // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }]
      }).then((data) => {
        fn && fn(data)
      })
        // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
  })
}

let init = function (fn) {
  axios.get(`${baseUrl}/loginRegist?${(new Date()).getTime()}`)
    .then((res) => {
      let data = res.data
      initGeetest({
        gt: data.gt,
        challenge: data.challenge,
        offline: !data.success // 表示用户后台检测极验服务器是否宕机，一般不需要关注
        // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
      }, (captchaObj) => {
        handlerPopupMobile(captchaObj, fn)
      })
    })
}
export default init

