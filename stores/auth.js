import { defineStore } from 'pinia'
import { getLogin, reflashToken, getRegister } from '~/api/api/login.js'

export const authStore = defineStore('auth', {
  state: () => ({
    userInfo: null,
    token: null,
    exp: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    getUserInfo: (state) => state.userInfo,
  },
  actions: {
    async login(email, password) {
      const [result, data] = await getLogin({ email, password })
      if (result) {
        this.setLogin(data.userInfo, data.token.token, data.token.exp)
        this.userInfo = data.userInfo
        this.token = data.token.token
        this.exp = data.token.exp
        return true
      } else {
        return false
      }
    },
    async register(obj) {
      const [result, data] = await getRegister(obj)
      if (result) {
        this.setLogin(data.userInfo, data.token.token, data.token.exp)
        this.userInfo = data.userInfo
        this.token = data.token.token
        this.exp = data.token.exp
        return true
      } else {
        return false
      }
    },
    logout() {
      useCookie('userInfo').value = null
      useCookie('token').value = null
      useCookie('exp').value = null
      this.userInfo = null
      this.token = null
      this.exp = null
    },
    getLogin() {
      const userInfo = useCookie('userInfo').value
      const token = useCookie('token').value
      const exp = useCookie('exp').value

      if (userInfo) {
        this.userInfo = userInfo
      } else {
        this.userInfo = null
      }

      if (token) {
        this.token = token
      } else {
        this.token = null
      }

      if (exp) {
        this.exp = exp
      }
    },
    setLogin(userInfo, token, exp) {
      if (userInfo) {
        const userInfoData = useCookie('userInfo')
        userInfoData.value = JSON.stringify(userInfo)
        this.userInfo = userInfo
      }

      if (token) {
        const tokenData = useCookie('token', { maxAge: 3600 * 3 })
        tokenData.value = token
        this.token = token
      }

      if (exp) {
        const expData = useCookie('exp', { maxAge: 3600 * 3 })
        expData.value = exp
        this.exp = exp
      }
    },
    async reflashToken(){
      const [result,data] = await reflashToken()
      if(result){
        this.setLogin(null,data.token,data.exp)
      }
    }
  },
})
