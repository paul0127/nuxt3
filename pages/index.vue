<script setup lang="ts">
import { useBaseApi } from '~/composables/api'
import type { IndexLayout, IndexTypeMap } from '~/types'

const { indexLayout } = useBaseApi()

const dataBase = ref<IndexLayout>({
  banner_list: [],
  out: [],
})

const [result, data] = await indexLayout()

dataBase.value = data

const componentMap: Record<keyof IndexTypeMap, string> = {
  news: 'IndexNews',
  adv: 'IndexAdv',
  products: 'IndexProduct',
  content: 'IndexFree',
  brands: 'IndexBrand',
}

const changeLayoutName = (layout: keyof IndexTypeMap) => {
  switch (layout) {
    case 'news':
      return resolveComponent('IndexNews')
    case 'adv':
      return resolveComponent('IndexAdv')
    case 'products':
      return resolveComponent('IndexProduct')
    case 'content':
      return resolveComponent('IndexFree')
    case 'brands':
      return resolveComponent('IndexBrand')
    default:
      return ''
  }
}
const out = reactive(
  dataBase.value.out.map((item) => {
    return {
      ...item,
      layout: changeLayoutName(item.lx),
    }
  })
)
</script>
<template>
  <div>
    <IndexBanner :banner_list="dataBase.banner_list" />
    <div class="container custom">
      <component
        v-for="(item, index) in out"
        :key="index"
        :is="item.layout"
        :layoutData="item"
      ></component>
    </div>
  </div>
</template>
<style lang="scss">
.b_title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 40px auto;
  text-align: center;

  .inner {
    border-bottom: 1px solid #9f9090;
    padding: 0 20px 5px 20px;

    .name {
      font-size: 2.75rem;
      font-weight: 400;
      color: #707070;
    }

    .s_name {
      font-size: 1.75rem;
      color: #ffa15a;
      font-weight: 600;
    }
  }

  @media (max-width: 1500px) {
    margin: 0 auto 30px auto;

    .inner {
      .name {
        font-size: 2.25rem;
      }
    }
  }

  @media (max-width: 800px) {
    margin: 0 auto 20px auto;

    .inner {
      .name {
        font-size: 2rem;
      }

      .s_name {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
