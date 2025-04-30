<script setup>
import { currency } from '~/utils/filter.js'

import { useProductApi } from '~/composables/api'

const { getProductList } = useProductApi()

const route = useRoute()

const dataBase = ref({
  list:[]
})
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

const classId = ref(route.params.classid)

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
    <commonTitle
      :breads="breads"
      :rightToggle="true"
      :numberOfProducts="dataBase.total"
      :orderType="orderType"
      :tabType="tabType"
      @tabClick="tabClick"
      @orderTypeChange="getProductListApi"
    />
    <div class="page product">
      <template v-if="dataBase.list && dataBase.list.length > 0">
        <CommonProductRight
          :productList="dataBase.list"
          :tabType="tabType"
          :classId="classId"
        />
        <commonPager
          :total="dataBase.total"
          :page="dataBase.page"
          :limit="dataBase.limit"
          @pageChange="getProductListApi"
        />
      </template>
      <template v-else>
        <div class="no_product">
          <p>目前沒有商品</p>
        </div>
      </template>
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
  }
}
</style>
