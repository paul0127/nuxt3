<script setup>
import { useBrandApi } from '~/composables/api'

const { getBrandList } = useBrandApi()

const dataBase = ref()
const getBrandListApi = async () => {
  const [result, data] = await getBrandList()
  dataBase.value = data
}
await getBrandListApi()

const breads = reactive([
  {
    name: '品牌旗艦',
    link: '#',
  },
])
</script>
<template>
  <div>
    <CommonTitle :breads="breads" />
    <div class="page brand">
      <div class="list">
        <div class="item" v-for="item in dataBase" :key="item.id">
          <NuxtLink :to="`/brand/${item.id}`" class="image">
            <img :src="`${urlBase}${item.pic}`" alt="" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.brand {
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

        img {
          width: 100%;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
