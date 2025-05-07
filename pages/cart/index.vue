<script setup>
const cart = cartStore()
const cartList = computed(() => {
  return cart.getCartDetail
})

const total = computed(() => {
  let total = 0
  cartList.value.forEach((item) => {
    total = total + item.selling_price * item.qty
  })
  return total
})

const store = cartStore()

const qtyChange = (p_id, s_id, event) => {
  store.addToCart('save', { p_id, s_id, qty: event.target.value })
}

const deleteProduct = (p_id, s_id) => {
  store.addToCart('delete', { p_id, s_id })
  ElNotification({
      title: '成功',
      message: '已成功移除商品',
      type: 'success',
    })
}

const router = useRouter()
</script>
<template>
  <div class="container custom">
    <commonTitle
      :breads="[
        {
          name: '會員專區',
          link: '#',
        },
      ]"
    />
    <div class="page cart">
      <div class="info">
        <div class="name">購物車清單</div>
        <div class="list">
          <div class="item">
            <div class="table" v-if="cartList.length">
              <div class="head">
                <div class="th image"></div>
                <div class="th product_name">商品</div>
                <div class="th spec">規格</div>
                <div class="th price">單價</div>
                <div class="th qty">數量</div>
                <div class="th m_total">小計</div>
                <div class="th operate"></div>
              </div>
              <div class="body">
                <div class="tr" v-for="(item, index) in cartList" :key="index">
                  <div class="td image">
                    <img :src="`${urlBase}${item.pic}`" alt="" />
                  </div>
                  <div class="td_group">
                    <div class="td product_name">
                      <NuxtLink :to="item.url">{{ item.p_title }}</NuxtLink>
                    </div>
                    <div class="td spec">
                      {{ item.specification ? item.specification : '-' }}
                    </div>
                    <div class="td price" data-label="單價:">
                      ${{ item.selling_price }}
                    </div>
                    <div class="td qty">
                      <select
                        :value="item.qty"
                        @change="qtyChange(item.p_id, item.s_id, $event)"
                        name=""
                        id=""
                      >
                        <option :value="q" v-for="q in item.qty + 5" :key="q">
                          {{ q }}
                        </option>
                      </select>
                    </div>
                    <div class="td m_total" data-label="小計:">
                      ${{ item.selling_price * item.qty }}
                    </div>
                    <div class="td operate">
                      <button
                        class="del_item"
                        @click="deleteProduct(item.p_id, item.s_id)"
                      >
                        移除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="foot">
                <div class="tr">
                  <div class="td">總計：</div>
                  <div class="td m_total">${{ total }}</div>
                  <div class="td operate"></div>
                </div>
              </div>
            </div>
            <div v-else>目前購物車無商品</div>
          </div>
        </div>
        <div class="bottom">
          <div class="right">
            <div class="total">
              <label for="">商品總額</label>
              ${{ total }}
            </div>
            <div class="btns">
              <button class="go_shop" @click="router.push('/')">
                繼續購物
              </button>
              <button class="go_pay" @click="router.push('/cart/payment')">
                結帳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./cart.scss" />
