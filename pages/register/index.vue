<script setup>
import Title from '~/components/common/Title.vue'
</script>
<template>
  <div class="container custom">
    <Title
      :breads="[
        {
          name: '會員專區',
          link: '#',
        },
      ]"
    />
    <div class="page regist_index">
      <div class="info">
        <div class="item">
          <div class="name">
            <font-awesome-icon class="icon-left" :icon="['fab', 'pagelines']" />
            一般會員註冊
            <font-awesome-icon class="icon-right" :icon="['fab', 'pagelines']" />
          </div>
          <div class="desc">一般會員註冊</div>
          <NuxtLink to="/register/normal">一般會員註冊</NuxtLink>
        </div>
        <div class="item">
          <div class="name">
            <font-awesome-icon class="icon-left" :icon="['fab', 'pagelines']" />
            員購、團購、美髮工具 會員註冊
            <font-awesome-icon class="icon-right" :icon="['fab', 'pagelines']" />
        </div>
          <div class="desc">會員註冊</div>
          <NuxtLink to="/register/other">會員註冊</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 註冊選擇 */
.regist_index {
  .info {
    margin-top: 57px;
    display: flex;
    justify-content: center;

    .item {
      max-width: 550px;
      width: 100%;
      margin-right: 8%;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: inset 10px 50px 50px #00000033, 15px 15px 15px #00000029;
      border-radius: 5px;
      padding: 125px 20px 55px 20px;

      &:last-child {
        margin-right: 0;
      }

      .name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 700;
        color: #82cbc4;
        margin: 0 auto;
        margin-bottom: 30px;
        text-align: center;
        max-width: 460px;
        height: 86px;

        svg {
          content: '\f18c';
          font-family: 'Font Awesome 5 Brands';
          font-weight: 700;
          color: #82cbc4;
          font-size: 1.75rem;
        }

        .icon-left {
          margin-right: 20px;
        }

        .icon-right {
          transform: scaleX(-1);
          margin-left: 20px;
        }
      }

      .desc {
        text-align: center;
        font-size: 1.5rem;
        color: #82cbc4;
        min-height: 150px;
        margin-bottom: 12px;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 280px;
        height: 54px;
        margin: 0 auto;
        background-color: #82cbc4;
        color: #fff;
        border-radius: 20px;
        font-size: 1.65rem;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .info {
      margin-top: 0;
      flex-wrap: wrap;

      .item {
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
