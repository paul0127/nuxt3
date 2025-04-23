<script setup>
import { currency } from '~/utils/filter.js'

const props = defineProps({
  layoutData: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<template>
  <div class="index_product">
    <div class="b_title">
      <div class="inner">
        <div class="name">{{ layoutData.name }}</div>
        <div class="s_name">{{ layoutData.ename }}</div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in layoutData.list" :key="item.p_id">
        <NuxtLink class="image" :to="item.url">
          <img :src="`${urlBase}${item.pic}`" alt="" />
        </NuxtLink>
        <NuxtLink class="name" :to="item.url">{{ item.p_title }}</NuxtLink>
        <div class="price">
          <div class="discount">NT${{ currency(item.market_price) }}</div>
          <div class="real">NT${{ currency(item.selling_price) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 首頁產品 */
.index_product {
  margin-bottom: 70px;
  border-bottom: 1px solid #9f9090;

  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    .item {
      flex: 0 0 25%;
      padding: 0 15px;
      text-align: center;
      padding-bottom: 50px;
      text-decoration: none;

      .image {
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        img {
          margin-bottom: 15px;
          width: 100%;
        }
      }

      .name {
        display: block;
        padding: 0 30px;
        margin-bottom: 20px;
        text-decoration: underline;
        cursor: pointer;
        color: #333;

        &:hover {
          opacity: 0.8;
        }
      }

      .price {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        margin-bottom: 20px;

        .discount {
          text-decoration: line-through;
          margin-right: 20px;
          font-weight: 400;
          color: #333333;
        }

        .real {
          color: #82cbc4;
        }
      }

      .buy_btn {
        background-color: #82cbc4;
        color: #fff;
        width: 140px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        font-size: 1.35rem;
        border-radius: 15px;
        font-weight: 300;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .list {
      .item {
        .name {
          padding: 0 10px;
        }

        .price {
          font-size: 1rem;

          .discount {
            margin-right: 10px;
          }
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
        flex: 0 0 50%;

        .price {
          font-size: 1rem;
          flex-direction: column;

          .discount {
            margin-right: 0;
          }
        }

        .buy_btn {
          width: 120px;
          font-size: 1.1rem;
        }
      }
    }
  }
}
</style>
