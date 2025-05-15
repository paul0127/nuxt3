<script setup lang="ts">
import type { ProductItem } from '~/types/product'

const props = defineProps<{
  productList: ProductItem[],
  tabType: 'grid' | 'list',
  classId: string,
}>()
</script>

<template>
  <div class="list" :class="{ list_column: tabType == 'list' }">
    <div class="item" v-for="(item, index) in productList" :key="index">
      <NuxtLink
        class="image"
        :to="`/product/class_${classId}/${item.p_id}`"
      >
        <img :src="`${urlBase}${item.pic}`" alt="" />
      </NuxtLink>
      <div class="text">
        <NuxtLink
          class="name"
          :to="`/product/class_${classId}/${item.p_id}`"
        >
          {{ item.p_title }}
        </NuxtLink>
        <div class="desc">
          {{ item.descript }}
        </div>
        <div class="price">
          <div class="discount">NT${{ currency(item.market_price) }}</div>
          <div class="real">NT${{ currency(item.selling_price) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.list {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px 100px -10px;

  .item {
    flex: 0 0 25%;
    padding: 0 10px;
    text-align: center;
    padding-bottom: 20px;
    text-decoration: none;
    margin-bottom: 40px;

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

    .text {
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

      .desc {
        display: none;
      }

      .price {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        margin-bottom: 20px;

        .discount {
          text-decoration: line-through;
          margin-right: 10px;
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

  &.list_column {
    .item {
      flex: 0 0 100%;
      display: flex;

      .image {
        margin-right: 30px;
        flex: 0 0 250px;
      }

      .text {
        flex: 1;
        text-align: left;
        display: flex;
        flex-direction: column;

        .name {
          padding: 0;
          font-size: 1.5rem;
        }

        .desc {
          display: block;
          margin-bottom: 20px;
        }

        .price {
          justify-content: flex-end;
        }

        .buy_btn {
          margin-right: 0;
        }
      }
    }
  }
}

@media (max-width: 1400px) {
  .list {
    .item {
      .text {
        .price {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .list {
    .item {
      flex: 0 0 50%;

      .text {
        .name {
          padding: 0;
        }

        .price {
          flex-direction: column;

          .discount {
            font-size: 1rem;
            margin-right: 0;
          }

          .real {
            font-size: 1rem;
          }
        }
      }
    }

    &.list_column {
      .item {
        .image {
          flex: 0 0 100px;
          margin-right: 20px;
        }

        .text {
          .name {
            font-size: 1.25rem;
          }

          .price {
            align-items: flex-end;
          }
        }
      }
    }
  }
}
</style>
