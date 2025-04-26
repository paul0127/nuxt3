<script setup>
import { getFooterData } from '~/api/api/base.js'

const dataBase = ref()
const [result, data] = await getFooterData()
dataBase.value = data
</script>
<template>
  <footer>
    <div class="container custom">
      <div class="foot_left">
        <div class="foot_logo">
          <a href="#"><img src="@/assets/common/logo.png" alt="" /></a>
        </div>
        <div class="copyright">©2021 台灣IU版權所有</div>
        <ul class="social">
          <li v-if="dataBase.fb_url">
            <NuxtLink :to="dataBase.fb_url"
              ><font-awesome-icon :icon="['fab', 'square-facebook']"
            /></NuxtLink>
          </li>
          <li v-if="dataBase.line_url">
            <NuxtLink :to="dataBase.line_url"
              ><font-awesome-icon :icon="['fab', 'line']"
            /></NuxtLink>
          </li>
          <li v-if="dataBase.ig_url">
            <NuxtLink :to="dataBase.ig_url"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></NuxtLink>
          </li>
          <li v-if="dataBase.yt_url">
            <NuxtLink :to="dataBase.yt_url"
              ><font-awesome-icon :icon="['fab', 'youtube']"
            /></NuxtLink>
          </li>
        </ul>
      </div>
      <div class="foot_right">
        <div class="column">
          <div class="title">關於我們</div>
          <ul>
            <li v-if="dataBase.tel">
              <font-awesome-icon :icon="['fas', 'phone-volume']" />{{
                dataBase.tel
              }}
            </li>
            <li v-if="dataBase.fax">
              <font-awesome-icon :icon="['fas', 'fax']" />{{ dataBase.fax }}
            </li>
            <li v-if="dataBase.email">
              <font-awesome-icon :icon="['fas', 'envelope']" />{{
                dataBase.email
              }}
            </li>
            <li v-if="dataBase.addr">
              <font-awesome-icon :icon="['fas', 'address-book']" />{{
                dataBase.addr
              }}
            </li>
            <li v-if="dataBase.open_time">
              <font-awesome-icon :icon="['fas', 'clock']" />{{
                dataBase.open_time
              }}
            </li>
          </ul>
        </div>
        <div class="column">
          <div class="title">常見問題</div>
          <ul>
            <li><a href="#">我的帳戶</a></li>
            <li><a href="#">付款方式</a></li>
            <li><a href="#">員購購物流程</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background-color: #82cbc4;
  padding: 30px 0;

  .container {
    display: flex;
    justify-content: space-between;
  }

  .foot_left {
    flex: 0 0 200px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 100px;

    .foot_logo {
      width: 150px;
      margin-bottom: 20px;
    }

    .copyright {
      margin-bottom: 20px;
    }

    ul.social {
      display: flex;
      padding-left: 0;
      list-style: none;
      margin-bottom: 0;
      font-size: 2rem;

      li {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }

        a {
          color: #fff;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }

  .foot_right {
    display: flex;
    flex: 1;

    .column {
      flex: 1;
      margin-right: 50px;

      &:last-child {
        margin-right: 0;
      }

      .title {
        font-size: 1.35rem;
        color: #fff;
        padding: 0 20px 10px 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #fff;
      }

      ul {
        padding-left: 20px;
        list-style: none;
        margin-bottom: 0;
        color: #fff;

        li {
          font-size: 1.35rem;
          margin-bottom: 10px;

          svg {
            width: 30px;
            margin-right: 10px;
          }

          a {
            color: #fff;
            cursor: pointer;
            text-decoration: none;

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1400px) {
    .foot_left {
      margin-right: 80px;
    }

    .foot_right {
      .column {
        .title {
          font-size: 1.25rem;
          padding: 0 10px 5px 10px;
          margin-bottom: 10px;
        }

        ul {
          padding-left: 10px;

          li {
            font-size: 1.1rem;
            margin-bottom: 5px;

            svg {
              width: 20px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .container {
      flex-wrap: wrap;
    }

    .foot_left {
      flex: 0 0 100%;
      margin-right: 0;
      margin-bottom: 40px;
    }

    .foot_right {
      flex-wrap: wrap;

      .column {
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }

        .title {
          padding: 0 0 10px 0;
        }

        ul {
          padding-left: 0;
        }
      }
    }
  }
}
</style>
