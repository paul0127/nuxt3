<script setup>
import swiper from '~/components/kits/swiper.vue'
import Title from '~/components/common/Title.vue'

const { getProduct, toLove } = useApiClient()

const route = useRoute()
const dataBase = ref({
  info:{}
})
const select_item = ref(0)

const getProductApi = async () => {
  const [result, data] = await getProduct({
    class: route.params.classid,
    pid: route.params.id,
  })

  dataBase.value = data
  dataBase.value.info.res = dataBase.value.info.res.map((item) => {
    return {
      ...item,
      img: `${urlBase}${item.pic}`,
    }
  })
  dataBase.value.info.p_content = dataBase.value.info.p_content.replace(
    '/ckfinder/',
    `${urlBase}/ckfinder/`
  )
  select_item.value = dataBase.value.specification[0].id
}
await getProductApi()

const selectItemPrice = computed(() => {
  const item = dataBase.value.specification.find(
    (item) => item.id === select_item.value
  )
  return item ? item : { is_stock: 0, market_price: 0, selling_price: 0 }
})

const qty = ref(1)

const addMinusQty = (q) => {
  if (q === 'minus') {
    qty.value = qty.value > 1 ? qty.value - 1 : 1
  } else if (q === 'plus') {
    qty.value = qty.value + 1
  }
}

const toLoveApi = async () => {
  const [result, data, info] = await toLove({ pid: dataBase.value.info.p_id })
  if (result) {
    alert(info)
    await getProductApi()
  }else{
    alert(info)
  }
}

const store = cartStore()
const addCart = async () => {
  const product = {
    p_id: dataBase.value.info.p_id,
    s_id: select_item.value,
    qty: qty.value,
  }
  store.addToCart(product)
}

const breads = reactive([
  {
    name: dataBase.value.info.class.cname,
    url: `/product/class_${dataBase.value.info.class.id}`,
  },
  {
    name: dataBase.value.info.p_title,
    url: '#',
  },
])

useHead({
  title: dataBase.value.info.p_title,
  meta: [
    { name: 'description', content: dataBase.value.info.descript },
    {
      name: 'keywords',
      content: dataBase.value.info.keywords,
    },
  ],
})
</script>
<template>
  <div>
    <Title :breads="breads" />

    <div class="page product">
      <div class="info">
        <div class="info_top">
          <div class="img">
            <div class="product_slider">
              <swiper :list="dataBase.info.res" />
            </div>
            <div class="img_list">
              <div
                class="item"
                v-for="(pic, index) in dataBase.info.res"
                :key="index"
              >
                <div class="image">
                  <img :src="pic.img" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="text">
            <div class="name" @click="getProductApi">
              {{ dataBase.info.p_title }}
            </div>
            <div class="feature">{{ dataBase.info.feature }}</div>
            <div class="desc">
              {{ dataBase.info.descript }}
            </div>
            <div class="price">
              <div class="discount">NT${{ selectItemPrice.selling_price }}</div>
              <div class="real">NT${{ selectItemPrice.market_price }}</div>
            </div>
            <div class="brand">
              <label for="">商品品牌：</label
              ><NuxtLink :to="`/brand/${dataBase.info.author}`">{{
                dataBase.info.creator
              }}</NuxtLink>
            </div>
            <div class="stock">
              <label for="">供貨狀況：</label
              >{{ selectItemPrice.is_stock ? '有現貨' : '目前沒有現貨' }}
            </div>
            <div class="options">
              <label for="">容量</label>
              <div
                class="opt"
                v-for="item in dataBase.specification"
                :key="item.id"
              >
                <input
                  type="radio"
                  name="options"
                  :id="`r_${item.id}`"
                  :value="item.id"
                  v-model="select_item"
                /><label :for="`r_${item.id}`">{{ item.name }}</label>
              </div>
            </div>
            <div class="qty">
              <div class="minus" @click="addMinusQty('minus')">
                <font-awesome-icon icon="minus" />
              </div>
              <input type="number" name="" id="" :value="qty" readonly />
              <div class="plus" @click="addMinusQty('plus')">
                <font-awesome-icon icon="plus" />
              </div>
            </div>
            <div class="btns">
              <div class="cart_btn" @click="addCart">
                <font-awesome-icon icon="cart-shopping" /> 加入購物車
              </div>
              <div
                class="follow_btn"
                :class="{ active: dataBase.info.loved }"
                @click="toLoveApi"
              >
                <font-awesome-icon icon="heart" /> 加入追蹤
              </div>
              <div class="buy_btn">
                <font-awesome-icon icon="cart-shopping" /> 立即購買
              </div>
            </div>
          </div>
        </div>

        <div class="info_middle">
          <div class="s_title">DETAIL</div>
          <div class="descript" v-html="dataBase.info.p_content" />
        </div>

        <div class="info_bottom">
          <div class="s_title">其他人還買了甚麼</div>
          <div class="recommend_list">
            <div class="item" v-for="item in dataBase.p_list" :key="item.p_id">
              <NuxtLink :to="item.url" class="image">
                <img :src="`${urlBase}${item.pic}`" alt="" />
              </NuxtLink>
              <div class="text">
                <NuxtLink :to="item.url" class="name">{{
                  item.p_title
                }}</NuxtLink>
                <div class="desc">
                  {{ item.descript }}
                </div>
                <div class="price">
                  <div class="discount">NT${{ item.market_price }}</div>
                  <div class="real">NT${{ item.selling_price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  .info {
    .info_top {
      display: flex;
      margin-bottom: 40px;

      .img {
        width: 600px;
        flex: 0 0 600px;
        padding: 0 30px;
        margin-right: 50px;

        .product_slider {
          width: 100%;
          position: relative;
          margin-bottom: 20px;

          .owl-stage-outer {
            z-index: 2;
          }

          .owl-nav {
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            font-size: 4rem;
            display: flex;
            justify-content: space-between;

            .owl-prev {
              transform: translateX(-30px);
            }

            .owl-next {
              transform: translateX(30px);
            }

            .owl-prev.disabled,
            .owl-next.disabled {
              color: #707070;
            }
          }
        }

        .img_list {
          display: flex;
          margin: 0 -10px;

          .item {
            flex: 0 0 25%;
            padding: 0 10px;

            .image {
              border: 1px solid #82cbc4;
              padding: 5px;
              cursor: pointer;

              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }

      .text {
        .name {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .feature {
          color: #82cbc4;
          font-size: 1.25rem;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .desc {
          margin-bottom: 50px;
        }

        .price {
          display: flex;
          align-items: flex-end;
          margin-bottom: 20px;
          line-height: 1;

          .discount {
            color: #82cbc4;
            font-size: 1.65rem;
            margin-right: 5px;
          }

          .real {
            text-decoration: line-through;
          }
        }

        .number,
        .brand,
        .stock {
          margin-bottom: 5px;

          a {
            color: #000;
          }
        }

        .options {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 30px;

          > label {
            margin-bottom: 5px;
            flex: 0 0 100%;
          }

          .opt {
            margin-right: 5px;

            input[type='radio'] {
              display: none;
            }

            label {
              padding: 2px 7px;
              border: 1px solid #333333;
              border-radius: 5px;
              cursor: pointer;
            }

            input[type='radio']:checked + label {
              background-color: #82cbc4;
              border-color: #82cbc4;
              color: #fff;
            }
          }
        }

        .qty {
          display: flex;
          margin-bottom: 20px;

          .minus,
          .plus {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #707070;
            color: #707070;
            cursor: pointer;

            &:hover {
              background-color: #707070;
              color: #fff;
            }
          }

          input[type='number'] {
            outline: none;
            border: 1px solid #707070;
            border-left: none;
            border-right: none;
            text-align: center;
            font-size: 1.5rem;
            width: 150px;
            color: #707070;
          }
        }

        .btns {
          display: flex;
          flex-wrap: wrap;

          .cart_btn,
          .follow_btn,
          .buy_btn {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 0;
            border: 1px solid #037469;
            border-radius: 5px;
            color: #037469;
            cursor: pointer;

            svg {
              margin-right: 10px;
            }

            &:hover {
              background-color: #037469;
              color: #fff;
            }
            &.active {
              background-color: #037469;
              color: #fff;
              cursor: default;
            }
          }

          .cart_btn {
            flex: 1;
            margin-right: 5px;
          }

          .follow_btn {
            flex: 1;
          }

          .buy_btn {
            flex: 0 0 100%;
            margin-top: 10px;
          }
        }
      }
    }

    .info_middle {
      display: block;
      margin-bottom: 40px;

      .s_title {
        border-left: 5px solid #707070;
        border-bottom: 1px solid #707070;
        font-size: 1.5rem;
        padding-left: 20px;
        line-height: 1.75;
        margin-bottom: 30px;
      }
    }

    .info_bottom {
      .s_title {
        border-left: 5px solid #707070;
        border-bottom: 1px solid #707070;
        font-size: 1.5rem;
        padding-left: 20px;
        line-height: 1.75;
        margin-bottom: 30px;
      }

      .recommend_list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;

        .item {
          flex: 0 0 25%;
          padding: 0 15px;
          text-align: center;
          padding-bottom: 20px;
          text-decoration: none;

          .image {
            cursor: pointer;

            &:hover {
              opacity: 0.8;
            }

            img {
              margin-bottom: 15px;
              width: 100%;
            }
          }

          .text {
            .name {
              display: block;
              padding: 0 30px;
              margin-bottom: 20px;
              text-decoration: underline;
              cursor: pointer;
              color: #333;

              &:hover {
                opacity: 0.8;
              }
            }

            .desc {
              display: none;
            }

            .price {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.25rem;
              margin-bottom: 20px;

              .discount {
                text-decoration: line-through;
                margin-right: 20px;
                font-weight: 400;
                color: #333333;
              }

              .real {
                color: #82cbc4;
              }
            }

            .buy_btn {
              background-color: #82cbc4;
              color: #fff;
              width: 140px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
              font-size: 1.35rem;
              border-radius: 15px;
              font-weight: 300;
              cursor: pointer;

              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .info_top {
      flex-wrap: wrap;

      .img {
        width: 100%;
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 20px;
        padding: 0;

        .product_slider {
          margin-bottom: 0;

          .owl-nav {
            display: none;
          }
        }

        .img_list {
          display: none;
        }
      }

      .text {
        .name {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .feature {
          margin-bottom: 10px;
        }

        .desc {
          margin-bottom: 20px;
        }

        .price {
          margin-bottom: 10px;
        }

        .qty input[type='number'] {
          min-height: 0;
          height: 40px;
          flex: 1;
        }
      }
    }

    .info_bottom {
      .recommend_list {
        .item {
          flex: 0 0 50%;

          .text {
            .name {
              padding: 0;
            }

            .price {
              flex-direction: column;

              .discount {
                font-size: 1rem;
                margin-right: 0;
              }

              .real {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
