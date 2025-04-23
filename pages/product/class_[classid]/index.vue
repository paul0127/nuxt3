<script setup>
import pager from '~/components/tools/pager.vue'
import Title from '~/components/common/Title.vue'
import { currency } from '~/utils/filter.js'

import { getProductList } from '~/api/api/product.js'

const route = useRoute()

const dataBase = ref()
const orderType = ref(null)

const getProductListApi = async () => {
  if (route.query.orderType == 'asc' || route.query.orderType == 'desc') {
    orderType.value = route.query.orderType
  } else {
    orderType.value = null
  }
  
  const [result, data] = await getProductList({
    class: route.params.classid,
    p: route.query.page || 1,
    order: orderType.value,
  })

  dataBase.value = data
}
await getProductListApi()

const tabType = ref('grid')

onMounted(() => {
  const tab = localStorage.getItem('tabType')
  if (tab) {
    tabType.value = tab
  } else {
    tabType.value = 'grid'
    localStorage.setItem('tabType', 'grid')
  }
})

const tabClick = (value) => {
  tabType.value = value
  localStorage.setItem('tabType', value)
}

const breads = reactive([
  {
    name: dataBase.value.info.cname,
    link: '#',
  },
])

useHead({
  title: dataBase.value.info.cname,
  meta: [
    { name: 'description', content: dataBase.value.info.Descript },
    {
      name: 'keywords',
      content: dataBase.value.info.keywords,
    },
  ],
})
</script>
<template>
  <div>
    <Title
      :breads="breads"
      :rightToggle="true"
      :numberOfProducts="dataBase.total"
      :orderType="orderType"
      :tabType="tabType"
      @tabClick="tabClick"
      @orderTypeChange="getProductListApi"
    />
    <div class="page product">
      <div class="list" :class="{ list_column: tabType == 'list' }">
        <div class="item" v-for="(item, index) in dataBase.list" :key="index">
          <NuxtLink class="image" :to="`/product/class_${route.params.classid}/${item.p_id}`">
            <img :src="`${urlBase}${item.pic}`" alt="" />
          </NuxtLink>
          <div class="text">
            <NuxtLink class="name" :to="`/product/class_${route.params.classid}/${item.p_id}`">
              {{ item.p_title }}
            </NuxtLink>
            <div class="desc">
              {{ item.descript }}
            </div>
            <div class="price">
              <div class="discount">NT${{ currency(item.market_price) }}</div>
              <div class="real">NT${{ currency(item.selling_price) }}</div>
            </div>
            <div class="buy_btn">加入購物車</div>
          </div>
        </div>
      </div>
      <pager
        :total="dataBase.total"
        :page="dataBase.page"
        :limit="dataBase.limit"
        @pageChange="getProductListApi"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product {
  .top {
    margin-bottom: 50px;

    img {
      width: 100%;
    }
  }

  .product_frame {
    display: flex;

    .left_menu {
      flex: 0 0 200px;
      margin-right: 30px;

      .top_menu {
        background-color: #82cbc4;
        color: #fff;
        text-align: center;
        padding: 10px 0;
        border: 1px solid #555;
      }

      ul {
        list-style: none;
        padding-left: 0;
        padding: 10px 5px 30px 5px;
        border: 1px solid #555;
        border-top: none;

        li {
          border-bottom: 1px solid #555;

          &:last-child {
            border-bottom: none;
          }

          a {
            color: #555;
            text-decoration: none;
            padding: 5px 10px;
            display: block;
            cursor: pointer;

            &:hover {
              color: #333;
            }
          }

          &.active a {
            color: #000;
          }
        }
      }
    }

    @media (max-width: 1200px) {
      .left_menu {
        display: none;
      }
    }
  }

  .list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px 100px -10px;

    .item {
      flex: 0 0 25%;
      padding: 0 10px;
      text-align: center;
      padding-bottom: 20px;
      text-decoration: none;
      margin-bottom: 40px;

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
          font-size: 1rem;
          margin-bottom: 20px;

          .discount {
            text-decoration: line-through;
            margin-right: 10px;
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

    &.list_column {
      .item {
        flex: 0 0 100%;
        display: flex;

        .image {
          margin-right: 30px;
          flex: 0 0 250px;
        }

        .text {
          flex: 1;
          text-align: left;
          display: flex;
          flex-direction: column;

          .name {
            padding: 0;
            font-size: 1.5rem;
          }

          .desc {
            display: block;
            margin-bottom: 20px;
          }

          .price {
            justify-content: flex-end;
          }

          .buy_btn {
            margin-right: 0;
          }
        }
      }
    }
  }

  @media (max-width: 1400px) {
    .list {
      .item {
        .text {
          .price {
            font-size: 0.75rem;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .list {
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

      &.list_column {
        .item {
          .image {
            flex: 0 0 100px;
            margin-right: 20px;
          }

          .text {
            .name {
              font-size: 1.25rem;
            }

            .price {
              align-items: flex-end;
            }
          }
        }
      }
    }
  }
}
</style>
