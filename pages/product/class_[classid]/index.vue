<script lang="ts" setup>
import { useProductApi } from '~/composables/api'
import type { ProductListResponse } from '~/types'

const { getProductList } = useProductApi()

const route = useRoute()

const dataBase = ref<ProductListResponse>({
  info: {
    id: '',
    cname: '',
    Keywords: '',
    Descript: '',
  },
  list: [],
  limit: 0,
  page: 0,
  total: 0,
  order: '',
})
const orderType = ref<'asc' | 'desc' | null>(null)

const getProductListApi = async (): Promise<void> => {
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

const tabType = ref<'grid' | 'list'>('grid')

const classId = ref<string>(
  Array.isArray(route.params.classid)
    ? route.params.classid[0]
    : route.params.classid || ''
)

onMounted(() => {
  const tab = localStorage.getItem('tabType')
  if (tab == 'grid' || tab == 'list') {
    tabType.value = tab
  } else {
    tabType.value = 'grid'
    localStorage.setItem('tabType', 'grid')
  }
})

const tabClick = (value: 'grid' | 'list') => {
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
      content: dataBase.value.info.Keywords,
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
