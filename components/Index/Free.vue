<script setup lang="ts">
import type { IndexBlock } from '~/types'

const props = defineProps<{
  layoutData: IndexBlock<'content'>
}>()
const content = ref()
content.value= props.layoutData.block.replaceAll(
  'ckfinder/',
  `${urlBase}ckfinder/`
)
</script>
<template>
  <div class="index_icon">
    <div class="content" v-html="content" />
  </div>
</template>
<style lang="scss" scoped>
/* 首頁icon */
.index_icon {
  display: flex;
  padding-bottom: 45px;
  .content{
    width: 100%;
    :deep(img){
      width: 100%;
      height: auto !important;
    }
  }

  .item {
    flex: 0 0 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      background-color: #82cbc4;
      width: 107px;
      height: 107px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5rem;
      border-radius: 100%;
      color: #fff;
      margin-bottom: 45px;
    }
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;

    .item {
      flex: 0 0 100%;
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }

      .icon {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
