<script setup>
import { calcTime } from '~/utils/day.js'
const props = defineProps({
  layoutData: {
    type: Object,
    default: () => ({}),
  },
})

const limit = 3
props.layoutData.list = props.layoutData.list.slice(0, limit)
</script>
<template>
  <div class="index_news">
    <div class="b_title">
      <div class="inner">
        <div class="name">{{layoutData.name}}</div>
        <div class="s_name">{{layoutData.ename}}</div>
      </div>
    </div>
    <div class="list">
      <NuxtLink class="item" v-for="item in layoutData.list" :key="item.n_id" :to="`/news/${item.n_id}`">
        <div class="inner">
          <div class="image">
            <img :src="`${urlBase}${item.n_pic}`" alt="" />
          </div>
          <div class="time">{{calcTime(item.n_pubdate)}}</div>
          <div class="name">
            {{item.n_title}}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 首頁消息 */
.index_news {
  display: block;
  margin-bottom: 70px;
  border-bottom: 1px solid #9f9090;

  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    .item {
      flex: 0 0 33.33%;
      padding: 0 15px;
      margin-bottom: 50px;
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

  @media (max-width: 800px) {
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
