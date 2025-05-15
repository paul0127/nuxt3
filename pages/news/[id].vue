<script setup lang="ts">
import { useNewsApi } from '~/composables/api'

import type { NewsDetailInfo } from '~/types'

const { getNews } = useNewsApi()

const route = useRoute()
const dataBase = ref<NewsDetailInfo>({
  n_id: 0,
  descript: '',
  keywords: '',
  classname: '',
  n_content: '',
  pc_code: 0,
  n_title: '',
  n_pubdate: '',
})

const [result, data] = await getNews({
  nid: route.params.id,
})
data['n_content'] = data['n_content'].replace(
  '/ckfinder/',
  `${urlBase}/ckfinder/`
)
dataBase.value = data
const breads = reactive([
  {
    name: dataBase.value.classname,
    link: `/News/class_${dataBase.value.pc_code}`,
  },
  {
    name: dataBase.value.n_title,
    link: '#',
  },
])
</script>
<template>
  <div>
    <commonTitle :breads="breads" />

    <div class="page news">
      <div class="info">
        <div class="name">
          {{ dataBase.n_title }}
        </div>
        <div class="time">{{ dataBase.n_pubdate }}</div>
        <div class="desc" v-html="dataBase.n_content" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.news .info {
  .name {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .time {
    margin-bottom: 20px;
  }
}
</style>
