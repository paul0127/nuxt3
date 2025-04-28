<script setup>
const store = authStore()
const router = useRouter()

const logout = async () => {
  await store.logout()
  await router.push('/')
}
</script>
<template>
    <div class="left_menu">
        <div class="level">VIP會員</div>
        <ul>
            <li><NuxtLink to="/member">個人資訊 <font-awesome-icon :icon="['fas', 'angle-right']" /></NuxtLink></li>
            <li><NuxtLink to="/member/password">更改密碼 <font-awesome-icon :icon="['fas', 'angle-right']" /></NuxtLink></li>
            <li><NuxtLink to="/member/order">訂單查詢 <font-awesome-icon :icon="['fas', 'angle-right']" /></NuxtLink></li>
            <li><NuxtLink to="/member/address">收件地址管理 <font-awesome-icon :icon="['fas', 'angle-right']" /></NuxtLink></li>
            <li><NuxtLink to="/member/love">收藏清單</NuxtLink></li>
        </ul>
        <button @click="logout">登出</button>
    </div>
</template>
<style scoped lang="scss">
/* 會員左側選單 */
    .left_menu {
      flex: 0 0 300px;
      position: relative;
      padding: 60px 15px 20px 15px;
      margin-top: 50px;
      border: 1px solid #707070;
      margin-right: 50px;

      .level {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        background-color: #82cbc4;
        color: #fff;
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.15rem;
      }

      ul {
        padding-left: 0;
        list-style: none;
        margin-bottom: 20px;

        li {
          border-bottom: 1px solid #707070;
          margin-bottom: 15px;
          padding-bottom: 5px;

          a {
            color: #333;
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            text-decoration: none;
            font-size: 1.15rem;
          }
        }
      }

      button {
        cursor: pointer;
        width: 100%;
        background-color: #82cbc4;
        border: none;
        color: #fff;
        padding: 5px 0;
        font-size: 1.15rem;
      }
    }

  @media (max-width: 1400px) {
      .left_menu {
        flex: 0 0 210px;
        margin-right: 10px;

        .level {
          width: 80px;
          height: 80px;
          font-size: 1rem;
        }

        ul {
          li {
            padding-bottom: 3px;
            margin-bottom: 10px;

            a {
              font-size: 1rem;
            }
          }
        }
      }
    }

  @media (max-width: 1200px) {
      .left_menu {
        display: none;
      }
    }
</style>