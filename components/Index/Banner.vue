<script setup lang="ts">
import type { IndexBannerList } from '~/types'

const props = defineProps<{
  banner_list: IndexBannerList[]
}>()

const list = props.banner_list.map((item) => {
  return {
    id: item.l_id,
    img: `${urlBase}${item.l_pic}`,
    link: item.l_url,
  }
})
</script>
<template>
  <div class="banner">
    <kitsSwiper :list="list" />
  </div>
</template>
<style lang="scss" scoped>
.banner {
  margin-bottom: 40px;
}
</style>
