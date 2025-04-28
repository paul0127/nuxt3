import { defineStore } from 'pinia'
import { addCart, getCartDetail } from '~/api/api/product.js'

export const cartStore = defineStore('cart', {
  state: () => ({
    cartDetail:[],
    cart: [],
  }),
  getters: {
    getCartDetail: (state) => state.cartDetail,
  },
  actions: {
    async addToCart(product) {
      const res = this.cart.findIndex(
        item => item.p_id == product.p_id && item.s_id == product.s_id
      )
      if (res !== -1) {
        this.cart = this.cart.map(item=>{
          if(item.p_id==product.p_id && item.s_id == product.s_id){
            item.qty = item.qty + product.qty
          }

          return item
        })
      } else {
        this.cart.push(product)
      }
      this.setCart()
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
    async getToCartDetail(){
      const [result,data, info] = await getCartDetail(this.cart)
      if(result){
        this.cartDetail = data
      }
    }
  },
})
