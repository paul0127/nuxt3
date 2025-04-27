import { defineStore } from 'pinia'
import { getLogin } from '~/api/api/login.js'

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
        this.setLogin(data.userInfo, data.token)
        this.userInfo = data.userInfo
        this.token = data.token
        return true
      } else {
        return false
      }
    },
    logout() {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
      this.userInfo = null
      this.token = null
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
    setLogin(userInfo, token) {
      const userInfoData = useCookie('userInfo')
      userInfoData.value = JSON.stringify(userInfo)

      const tokenData = useCookie('token')
      tokenData.value = token
    },
  },
})
