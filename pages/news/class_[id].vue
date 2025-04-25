<script setup>
import pager from '~/components/Common/pager.vue'
import Title from '~/components/common/Title.vue'

import { getNewsList } from '~/api/api/news.js'

const route = useRoute()

let dataBase = ref({
  info:{},
  list: [],
  total: 0,
  page: 1,
  limit: 10,
})

const getNewsListApi = async () => {
  const [result, data] = await getNewsList({
    class: route.params.id,
    p: route.query.page || 1,
  })

  dataBase.value = data
}

await getNewsListApi()

const breads = reactive([
  {
    name: dataBase.value.info.cname,
    link: '#',
  },
])

useHead({
  title: dataBase.value.info.cname,
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
    <div class="page news">
      <div class="list">
        <NuxtLink
          v-for="item in dataBase.list"
          :key="item.n_id"
          :to="`/news/${item.n_id}`"
          class="item"
        >
          <div class="inner">
            <div class="image">
              <img :src="`${urlBase}${item.n_pic}`" alt="" />
            </div>
            <div class="time">{{ calcTime(item.n_pubdate) }}</div>
            <div class="name">
              {{ item.n_title }}
            </div>
          </div>
        </NuxtLink>
      </div>
      <pager
        :total="dataBase.total"
        :page="dataBase.page"
        :limit="dataBase.limit"
        @pageChange="getNewsListApi"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news {
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    margin-bottom: 50px;

    .item {
      flex: 0 0 33.33%;
      padding: 0 15px;
      margin-bottom: 30px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      .inner {
        background-color: #f3f3f3;
        padding-bottom: 20px;

        .image {
          margin-bottom: 20px;

          img {
            width: 100%;
          }
        }

        .time {
          color: #000;
          margin-bottom: 10px;
          font-size: 0.85rem;
        }

        .name {
          color: #000;
          padding: 0 20px;
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding-bottom: 20px;
    margin-bottom: 40px;

    .list {
      flex-wrap: wrap;

      .item {
        flex: 0 0 100%;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
