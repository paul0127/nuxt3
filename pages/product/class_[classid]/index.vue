<script setup>
import pager from '~/components/Common/pager.vue'
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
      <CommonProductRight :productList="dataBase.list" :tabType="tabType" :classId="classId" />
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
  }

}
</style>
