<script setup>
import Title from '~/components/common/Title.vue'

const breads = reactive([
  {
    name: 'AVEDA',
    url: '/',
  },
])
</script>
<template>
  <div>
    <Title :breads="breads" />
    <div class="page brand">
      <div class="list">
        <div class="item">
          <a href="./product_info.html" class="image">
            <img src="@/assets/index/product.png" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="./product_info.html" class="image">
            <img src="@/assets/index/product.png" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="./product_info.html" class="image">
            <img src="@/assets/index/product.png" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="./product_info.html" class="image">
            <img src="@/assets/index/product.png" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="./product_info.html" class="image">
            <img src="@/assets/index/product.png" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="./product_info.html" class="image">
            <img src="@/assets/index/product.png" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="./product_info.html" class="image">
            <img src="@/assets/index/product.png" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="./product_info.html" class="image">
            <img src="@/assets/index/product.png" alt="" />
          </a>
        </div>
      </div>

      <ul class="pager">
        <li class="pre"><i class="fas fa-angle-double-left"></i></li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li class="next"><i class="fas fa-angle-double-right"></i></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.brand {
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

        img {
          width: 100%;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
