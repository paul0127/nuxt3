export const checkReflashToken = async () => {
  const store = authStore()

  const token = store.token
  const exp = store.exp
  const timer = Math.round(new Date().getTime() / 1000)
  
  if (token && timer > exp) await store.reflashToken()
}
