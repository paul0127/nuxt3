<script setup>
const props = defineProps({
  layoutData: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<template>
  <div class="index_brand">
    <div class="b_title">
      <div class="inner">
        <div class="name">{{layoutData.name}}</div>
        <div class="s_name">{{layoutData.ename}}</div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in layoutData.list" :key="item.id">
        <NuxtLink class="image" :to="`/brand/${item.id}`">
          <img :src="`${urlBase}${item.pic}`" alt="" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 首頁品牌 */
.index_brand {
  padding-bottom: 50px;
  margin-bottom: 70px;
  border-bottom: 1px solid #9f9090;

  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -45px -60px -45px;
    padding-top: 20px;

    .item {
      flex: 0 0 25%;
      padding: 0 45px;
      margin-bottom: 60px;

      .image {
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 1350px) {
    .list {
      margin: 0 -15px -40px -15px;

      .item {
        flex: 0 0 25%;
        padding: 0 15px;
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: 800px) {
    padding-bottom: 20px;
    margin-bottom: 40px;

    .list {
      margin: 0 -15px -40px -15px;

      .item {
        flex: 0 0 50%;
        padding: 0 15px;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
