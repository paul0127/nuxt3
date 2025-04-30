<script setup>
import { useBrandApi } from '~/composables/api'


const { getBrandProductList } = useBrandApi()

const route = useRoute()

const dataBase = ref({
  list: [],
  info: {
    name: '',
    pic: '',
    descript: '',
  },
})
const getBrandProductListApi = async () => {
  const [result, data] = await getBrandProductList({
    id: route.params.id,
    p: route.query.page || 1,
    fliter: route.query.fliter || null,
  })
  dataBase.value = data
}
await getBrandProductListApi()

const tabType = ref('grid')

const classId = ref(route.params.id)

const breads = reactive([
  {
    name: dataBase.value.info.name,
    link: '#',
  },
])
useHead({
  title: dataBase.value.info,
  meta: [
    { name: 'description', content: dataBase.value.info.name },
    {
      name: 'keywords',
      content: dataBase.value.info.descript,
    },
  ],
})
</script>
<template>
  <div>
    <CommonTitle :breads="breads" />
    <div class="page product">
      <div class="top">
        <img :src="`${urlBase}${dataBase.info.pic}`" alt="" />
      </div>
      <div class="product_frame">
        <CommonProductLeft
          :menuList="dataBase.class_list"
          @linkClick="getBrandProductListApi"
        />
        <CommonProductRight
          :productList="dataBase.list"
          :tabType="tabType"
          :classId="classId"
        />
      </div>

      <CommonPager
        :total="dataBase.total"
        :page="dataBase.page"
        :limit="dataBase.limit"
        @pageChange="getBrandProductListApi"
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
