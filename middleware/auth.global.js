export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = authStore()
  store.getLogin()

  // const token = store.token
  // const exp = store.exp
  // const timer = Math.round(new Date().getTime() / 1000)
  // if(token && (timer > exp))await store.reflashToken()

  const isLoggedIn = store.isLoggedIn

  if (to.path.includes('member') && !isLoggedIn) {
    return navigateTo('/login')
  }
  if (to.name === 'login' && isLoggedIn) {
    console.log(to, 'back')
    return navigateTo('/')
  }
})
