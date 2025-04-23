<script setup>
import Title from '~/components/common/Title.vue'
import { pageData } from '~/api/api/page.js'

const route = useRoute()

const dataBase = ref()

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
    <Title :breads="breads" />
    <div class="page onepage">
      <div class="info">
        <div class="name">{{dataBase.stitle}}</div>
        <div class="desc" v-html="dataBase.content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
