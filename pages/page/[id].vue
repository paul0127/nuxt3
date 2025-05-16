<script setup lang="ts">
import { usePageApi } from '~/composables/api'
import type { page } from '~/types'

const { pageData } = usePageApi()

const route = useRoute()

const dataBase = ref<page>({
  id: 0,
  stitle: '',
  keywords: '',
  descript: '',
  content: '',
})

const [result, data] = await pageData({
  id: route.params.id,
})

dataBase.value = data

const breads = reactive([
  {
    name: dataBase.value.stitle,
    link: '#',
  },
])

useHead({
  title: dataBase.value.stitle,
  meta: [
    { name: 'description', content: dataBase.value.descript },
    {
      name: 'keywords',
      content: dataBase.value.keywords,
    },
  ],
})
</script>

<template>
  <div>
    <commonTitle :breads="breads" />
    <div class="page onepage">
      <div class="info">
        <div class="name">{{ dataBase.stitle }}</div>
        <div class="desc" v-html="dataBase.content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
