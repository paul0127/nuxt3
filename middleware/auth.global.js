export default defineNuxtRouteMiddleware((to, from) => {
  const store = authStore()
  store.getLogin()

  const isLoggedIn = store.isLoggedIn

  if(to.path.includes('member') && !isLoggedIn) {
    return navigateTo('/login')
  }
  if(to.name === 'login' && isLoggedIn) {
    console.log(to,'back')
    return navigateTo('/')
  }
})
