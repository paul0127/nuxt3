export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = authStore()
  await store.getLogin()

  const isLoggedIn = store.isLoggedIn

  if (to.path.includes('member') && !isLoggedIn) {
    return navigateTo('/login')
  }
  if (to.name === 'login' && isLoggedIn) {
    return navigateTo('/')
  }
})
