<script setup lang="ts">
import { useBaseApi } from '~/composables/api'

const { getHeaderData } = useBaseApi()

const dataBase = ref()
try {
  const [result, data] = await getHeaderData()
  dataBase.value = data
} catch (error) {
  dataBase.value = []
}

const store = authStore()
const isLogin = computed(() => {
  return store.isLoggedIn
})

const cart = cartStore()
const cartList = computed(() => {
  return cart.getCartDetail
})

const common = commonStore()
const activeBtn = computed(() => {
  return common.activeBtn
})

const activeBtnToggle = (btn: string) => {
  common.btnToggle(btn)
}

const windowWidth = ref(0)
const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const menuItemToggle = (event: MouseEvent) => {
  if (windowWidth.value >= 1200) return

  const menu = event.currentTarget as HTMLElement
  const nextMenu = menu.nextElementSibling as HTMLElement | null
  const activeClass = 'active'
  const allMenus = document.querySelectorAll('header ul.nav > li > ul.sub_menu')
  allMenus.forEach((item) => item.classList.remove(activeClass))
  nextMenu?.classList.toggle(activeClass)
}

const route = useRoute()
watch(
  () => route.path,
  (newVal) => {
    common.clearBtnToggle()
  },
  {
    immediate: true,
  }
)
</script>
<template>
  <header>
    <div class="nav_top">
      <div
        class="menu_btn"
        :class="{ active: activeBtn == 'menu' }"
        @click="activeBtnToggle('menu')"
      >
        <font-awesome-icon icon="bars" />
      </div>
      <div class="logo">
        <NuxtLink to="/">
          <img src="@/assets/common/logo.png" alt="" />
        </NuxtLink>
      </div>
      <ul class="toolbar">
        <li class="member_bar">
          <template v-if="isLogin">
            <NuxtLink :to="'/member'">
              <font-awesome-icon icon="user" />
            </NuxtLink>
          </template>
          <template v-else>
            <a @click="activeBtnToggle('member')"
              ><font-awesome-icon icon="user"
            /></a>
            <div class="dropDown" :class="{ active: activeBtn == 'member' }">
              <div class="login_info">
                <NuxtLink to="/login">會員登入</NuxtLink>
                <NuxtLink to="/register">註冊新會員</NuxtLink>
              </div>
            </div>
          </template>
        </li>
        <li class="cart_bar">
          <a @click="activeBtnToggle('cart')"
            ><font-awesome-icon icon="cart-shopping" /><span class="num">{{
              cartList.length
            }}</span></a
          >
          <div class="dropDown" :class="{ active: activeBtn == 'cart' }">
            <div class="cart_info">
              <template v-if="cartList.length">
                <div class="list">
                  <div
                    class="item"
                    v-for="(item, index) in cartList"
                    :key="index"
                  >
                    <div class="image">
                      <img :src="`${urlBase}${item.pic}`" alt="" />
                    </div>
                    <div class="text">
                      <div class="name">
                        {{ item.p_title
                        }}{{
                          item.specification ? `-${item.specification}` : null
                        }}
                      </div>
                      <div class="qty">
                        <label for="">數量:</label>{{ item.qty }}
                      </div>
                    </div>
                  </div>
                </div>
                <NuxtLink to="/cart" class="to_cart">立即結帳</NuxtLink>
              </template>
              <template v-else>
                <div class="empty">購物車暫無商品</div>
              </template>
            </div>
          </div>
        </li>
        <li class="search_bar">
          <a @click="activeBtnToggle('search')"
            ><font-awesome-icon icon="magnifying-glass"
          /></a>
          <div class="dropDown" :class="{ active: activeBtn == 'search' }">
            <form action="">
              <input type="text" placeholder="請輸入產品名" />
              <button>搜尋</button>
            </form>
          </div>
        </li>
      </ul>
    </div>

    <ul class="nav" :class="{ active: activeBtn == 'menu' }">
      <li
        :class="{ sub: item.sub.length > 1 }"
        v-for="(item, index) in dataBase"
        :key="index"
      >
        <NuxtLink
          :class="{ sub: item.sub.length > 1 }"
          v-if="item.sub && item.sub.length > 0"
          :to="
            windowWidth >= 1200 || item.sub.length <= 1 ? item.sub[0].lurl : ''
          "
          @click="menuItemToggle"
          >{{ item.lname }}</NuxtLink
        >
        <ul class="sub_menu" v-if="item.sub.length > 1">
          <li v-for="(sub, i) in item.sub" :key="i">
            <NuxtLink :to="sub.lurl">{{ sub.lname }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  border-top: 60px solid #82cbc4;

  .nav_top {
    display: flex;
    justify-content: center;
    position: relative;

    .menu_btn {
      display: none;
    }

    .logo {
      width: 150px;
      height: 150px;

      a {
        display: block;
        &:hover {
          opacity: 0.8;
        }
      }
    }

    ul.toolbar {
      position: absolute;
      top: 50%;
      right: 60px;
      transform: translateY(-50%);
      display: flex;
      list-style: none;
      font-size: 2rem;
      border-left: 1px dotted #333;
      padding-left: 20px;
      margin-bottom: 0;
      z-index: 3;

      li {
        margin-right: 20px;
        position: relative;

        &:last-child {
          margin-right: 0;
        }

        a {
          color: #333;
          display: flex;
          align-items: center;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          span.num {
            width: 25px;
            height: 25px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #82cbc4;
            color: #fff;
            font-size: 0.8rem;
            margin-left: 5px;
            padding-left: 3px;
          }
        }

        .dropDown {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 300px;
          border: 1px solid #bbb;
          padding: 10px 20px;
          background-color: #fff;
          display: none;
          z-index: 4;

          &.active {
            display: block;
          }

          form {
            width: 100%;
            display: flex;
            align-items: center;

            input {
              flex: 1;
              min-width: 0;
              font-size: 1rem;
              margin-right: 10px;
              outline: none;
              border: 1px solid #bbb;
              padding: 3px 10px;
            }

            button {
              font-size: 1rem;
              border: none;
              background-color: #82cbc4;
              color: #fff;
              padding: 5px 15px;
              border-radius: 5px;
            }
          }

          .cart_info {
            display: block;

            .empty {
              font-size: 1rem;
            }

            .list {
              display: block;
              margin-bottom: 20px;

              .item {
                display: flex;
                padding-bottom: 10px;
                margin-bottom: 10px;
                border-bottom: 1px solid #333;

                &:last-child {
                  padding-bottom: 0;
                  margin-bottom: 0;
                  border: none;
                }

                .image {
                  flex: 0 0 50px;
                  margin-right: 10px;
                }

                .text {
                  font-size: 1rem;

                  .name {
                    margin-bottom: 5px;
                  }

                  .qty label {
                    margin-bottom: 0;
                  }
                }
              }
            }

            .to_cart {
              font-size: 1rem;
              background-color: #82cbc4;
              text-align: center;
              display: block;
              color: #fff;
              padding: 10px 0;
              border-radius: 20px;
            }
          }

          .login_info {
            display: block;

            a {
              width: 100%;
              border-radius: 5px;
              border: 1px solid #abb4bb;
              font-size: 1.25rem;
              text-align: center;
              display: block;
              margin-bottom: 10px;
              padding: 5px 0;
              color: #fff;

              &:first-child {
                background-color: #abb4bb;

                &:hover {
                  background-color: #86919b;
                }
              }

              &:last-child {
                background-color: #fff;
                margin-bottom: 0;
                border-color: #82cbc4;
                color: #82cbc4;

                &:hover {
                  background-color: #82cbc4;
                  color: #fff;
                }
              }
            }
          }

          .member_nav {
            ul {
              list-style: none;
              padding-left: 0;
              font-size: 1.25rem;

              li {
                margin-right: 0;
                padding-bottom: 5px;
                border-bottom: 1px dotted #707070;
                margin-bottom: 10px;

                a {
                  color: #333;
                }
              }
            }

            button {
              background-color: #82cbc4;
              color: #fff;
              font-size: 1.25rem;
              padding: 7px 0;
              width: 100%;
              border: none;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }

  ul.nav {
    background-color: #82cbc4;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 2rem;
    padding: 0 15px;
    list-style: none;

    > li {
      margin-right: 30px;
      position: relative;
      padding: 20px 0;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      > ul.sub_menu {
        position: absolute;
        top: 100%;
        left: -20px;
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
        background-color: #82cbc4;
        font-size: 1.5rem;
        padding: 10px 5px;
        transform: scaleY(0);
        transform-origin: top;
        transition-duration: 0.3s;
        width: calc(100% + 40px);
        text-align: center;
        z-index: 2;

        li {
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      &:hover > ul.sub_menu {
        transform: scaleY(1);
      }
    }
  }
}

@media (max-width: 1700px) {
  header {
    ul.nav {
      font-size: 1.75rem;
    }
  }
}

@media (max-width: 1500px) {
  header {
    border-width: 40px;

    .nav_top {
      .logo {
        width: 130px;
        height: 130px;
      }

      ul.toolbar {
        font-size: 1.5rem;

        li {
          margin-right: 15px;

          a {
            span.num {
              width: 23px;
              height: 23px;
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    ul.nav {
      font-size: 1.25rem;

      > li {
        margin-right: 20px;

        > ul.sub_menu {
          font-size: 1.15rem;
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  header {
    border-width: 20px;

    .nav_top {
      .logo {
        width: 110px;
        height: 110px;
      }
    }

    ul.nav {
      font-size: 1.25rem;

      > li {
        > ul.sub_menu {
          font-size: 1rem;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  body::-webkit-scrollbar {
    width: 0;
  }

  header {
    border: none;
    background-color: #82cbc4;
    position: relative;

    .nav_top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      position: unset;

      .menu_btn {
        display: block;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
      }

      .logo {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      ul.toolbar {
        position: unset;
        top: unset;
        right: unset;
        border: none;
        font-size: 1.25rem;
        transform: translateY(0);

        li {
          position: unset;
          margin-right: 10px;

          a {
            color: #fff;

            &:hover {
              opacity: 0.8;
              color: #fff;
            }

            span.num {
              background-color: #fff;
              color: #82cbc4;
              width: 20px;
              height: 20px;
              padding-left: 2px;
              margin-left: 0;
            }
          }

          &.active {
            .dropDown {
              width: 100vw;
              top: calc(100% + 15px);
              right: -15px;
              padding: 10px 15px;
            }
          }
        }
      }
    }

    ul.nav {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      display: block;
      padding: 0;
      border-top: 1px solid #fff;
      transform: scaleY(0);
      transform-origin: top;
      transition-duration: 0.3s;
      z-index: 3;

      &.active {
        transform: scaleY(1);
      }

      > li {
        margin-right: 0;
        padding: 0;

        > a {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 10px 15px;
          border-bottom: 1px solid #fff;

          &.sub::after {
            content: '\f0dd';
            font-family: 'Font Awesome 5 Free';
            font-weight: 700;
          }
        }

        > ul.sub_menu {
          position: relative;
          left: 0;
          width: 100%;
          transform: scaleY(1);
          text-align: left;
          padding: 0;
          font-size: 1.25rem;
          display: none;

          &.active {
            display: block;
          }

          li {
            margin-bottom: 0;

            > a {
              display: block;
              padding: 10px 36px;
              border-bottom: 1px solid #fff;

              &:last-child {
                border: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
