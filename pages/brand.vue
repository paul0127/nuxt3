<script setup>
import pager from '~/components/tools/pager.vue'
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
    <div class="page product">
      <div class="top">
        <img src="@/assets/brand/brand.png" alt="" />
      </div>
      <div class="product_frame">
        <div class="left_menu">
          <div class="top_menu">商品分類</div>
          <ul>
            <li>
              <a href="#">頭皮水系列</a>
            </li>
            <li>
              <a href="#">頭皮水系列</a>
            </li>
            <li>
              <a href="#">頭皮水系列</a>
            </li>
          </ul>
        </div>
        <div class="list">
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$1199</div>
                <div class="real">NT$1179</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
          <div class="item">
            <a href="./product_info.html" class="image">
              <img src="@/assets/index/product.png" alt="" />
            </a>
            <div class="text">
              <a href="./product_info.html" class="name"
                >本期07月每刊好物(2107 -02)美髮轉燈水槍</a
              >
              <div class="desc">
                產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述
              </div>
              <div class="price">
                <div class="discount">NT$99</div>
                <div class="real">NT$79</div>
              </div>
              <div class="buy_btn">加入購物車</div>
            </div>
          </div>
        </div>
      </div>

      <pager />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  .top {
    margin-bottom: 50px;

    img {
      width: 100%;
    }
  }

  .product_frame {
    display: flex;

    .left_menu {
      flex: 0 0 200px;
      margin-right: 30px;

      .top_menu {
        background-color: #82cbc4;
        color: #fff;
        text-align: center;
        padding: 10px 0;
        border: 1px solid #555;
      }

      ul {
        list-style: none;
        padding-left: 0;
        padding: 10px 5px 30px 5px;
        border: 1px solid #555;
        border-top: none;

        li {
          border-bottom: 1px solid #555;

          &:last-child {
            border-bottom: none;
          }

          a {
            color: #555;
            text-decoration: none;
            padding: 5px 10px;
            display: block;
            cursor: pointer;

            &:hover {
              color: #333;
            }
          }

          &.active a {
            color: #000;
          }
        }
      }
    }

    @media (max-width: 1200px) {
      .left_menu {
        display: none;
      }
    }
  }
}
</style>
