import { defineStore } from 'pinia'
import { getLogin, reflashToken, getRegister } from '~/api/api/login.js'

export const authStore = defineStore('auth', {
  state: () => ({
    userInfo: null,
    token: null,
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
        
        return true
      } else {
        return false
      }
    },
    logout() {
      useCookie('userInfo').value = null
      useCookie('token').value = null
      this.userInfo = null
    },
    getLogin() {
      const userInfo = useCookie('userInfo').value
      const token = useCookie('token').value

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
    },
    async setLogin(userInfo, token) {
      if (userInfo) {
        const userInfoData = await useCookie('userInfo')
        userInfoData.value = JSON.stringify(userInfo)
        this.userInfo = userInfo
      }

      if (token) {
        const tokenData = await useCookie('token', { maxAge: 3600 * 3 })
        tokenData.value = token
        this.token = token
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
