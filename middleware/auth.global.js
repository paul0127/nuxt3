import { ElNotification } from 'element-plus'

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

  const cart = cartStore()
  await cart.fetchCartDetailOnce()
  if (to.name === 'cart-payment' && cart.getCartDetail.length < 1) {
    ElNotification({
      title: 'Error',
      message: '目前購物車暫無商品',
      type: 'error',
    })
    return navigateTo('/')
  }
})
