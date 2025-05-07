import { defineStore } from 'pinia'
import { useCartApi } from '~/composables/api'

export const cartStore = defineStore('cart', {
  state: () => ({
    cartDetail: [],
    cart: [],
  }),
  getters: {
    getCartDetail: (state) => state.cartDetail,
  },
  actions: {
    async addToCart(action, product) {
      const res = this.cart.findIndex(
        (item) => item.p_id == product.p_id && item.s_id == product.s_id
      )
      if (res !== -1) {
        if (action == 'add') {
          this.cart = this.cart.map((item) => {
            if (item.p_id == product.p_id && item.s_id == product.s_id) {
              item.qty = item.qty + product.qty
            }

            return item
          })
        }

        if (action == 'save') {
          this.cart = this.cart.map((item) => {
            if (item.p_id == product.p_id && item.s_id == product.s_id) {
              item.qty = product.qty
            }

            return item
          })
        }

        if (action == 'delete') {
          this.cart = this.cart.filter(item=>item.p_id != product.p_id && item.s_id != product.s_id)
        }
      } else {
        this.cart.push(product)
      }
      this.setCart()
      this.getToCartDetail()
    },
    setCart() {
      const cart = useCookie('cart')
      cart.value = JSON.stringify(this.cart)
    },
    getCart() {
      const cart = useCookie('cart').value
      if (cart) {
        this.cart = cart
      }
    },
    async getToCartDetail() {
      const { getCartDetail } = useCartApi()

      const [result, data, info] = await getCartDetail(this.cart)
      if (result) {
        this.cartDetail = data
      }
    },
  },
})
