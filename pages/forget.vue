<script setup>
const input = ref({
  email: '',
})

const send = async () => {
//   const [result, data] = await getForget(input.value)
//   if (result) {
//     console.log('寄送成功')
//   } else {
//     console.log('寄送失敗')
//   }
}
</script>
<template>
  <div>
    <commonTitle
      :breads="[
        {
          name: '會員專區',
          link: '#',
        },
      ]"
    />
    <div class="page login">
      <div class="info">
        <div class="info_title">
          <font-awesome-icon class="icon-left" :icon="['fab', 'pagelines']" />
          <div class="title_inner">
            <div class="b_title">MEMBER</div>
            <div class="s_title">忘記密碼</div>
          </div>
          <font-awesome-icon class="icon-right" :icon="['fab', 'pagelines']" />
        </div>
        <div class="inputs">
          <div class="input">
            <label for="">請輸入您註冊的信箱</label
            ><input
              type="text"
              v-model="input.email"
              placeholder="請輸入您註冊的信箱"
            />
          </div>
        </div>
        <button class="send" @click="send">送出</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 登入頁面 */
.login {
  .info {
    max-width: 900px;
    margin: 0 auto;
    margin-top: 57px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: inset 10px 50px 50px #00000033, 15px 15px 15px #00000029;
    border-radius: 5px;
    padding: 50px;

    .info_title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 55px;

      &::before {
        margin-right: 30px;
      }

      &::after {
        transform: scaleX(-1);
        margin-left: 30px;
      }

      svg {
        font-weight: 700;
        color: #82cbc4;
        font-size: 2rem;
      }

      .icon-left {
        margin-right: 30px;
      }

      .icon-right {
        margin-left: 30px;
        transform: scaleX(-1);
      }
      .title_inner {
        text-align: center;
        color: #82cbc4;
        font-weight: 700;
        line-height: 1;

        .b_title {
          font-size: 2.25rem;
        }

        .s_title {
          font-size: 1.5rem;
        }
      }
    }

    ul.social_btns {
      display: flex;
      justify-content: center;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      line-height: 1;
      font-size: 5rem;
      padding-bottom: 56px;
      border-bottom: 1px solid #707070;
      margin-bottom: 37px;

      li {
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        &.line_btn {
          color: #3cd52e;
          margin-right: 76px;
        }

        &.fb_btn {
          color: #3a59a4;
        }
      }
    }

    .inputs {
      max-width: 540px;
      margin: 0 auto;
      margin-bottom: 55px;

      .input {
        margin-bottom: 15px;

        &:last-child {
          margin-bottom: 0;
        }

        label {
          width: 100%;
          color: #333333;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        input {
          width: 100%;
          padding: 10px 20px;
          font-size: 1.15rem;
          outline: none;
          border-radius: 5px;
          border: 1px solid #707070;
        }
      }
    }

    ul.login_btns {
      display: flex;
      padding-left: 0;
      list-style: none;
      margin-bottom: 50px;
      justify-content: center;

      li {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 130px;
          height: 37px;
          border: 1px solid #707070;
          font-size: 1.15rem;
          color: #333333;
          text-decoration: none;
          cursor: pointer;
          border-radius: 3px;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    button.send {
      cursor: pointer;
      width: 280px;
      height: 54px;
      background-color: #82cbc4;
      color: #fff;
      border-radius: 20px;
      border: none;
      font-size: 1.5rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 1200px) {
    .info {
      margin-top: 0;
      padding: 30px;

      .info_title {
        margin-bottom: 30px;

        &::before,
        &::after {
          font-size: 1.5rem;
        }

        .title_inner {
          .b_title {
            font-size: 2rem;
          }

          .s_title {
            font-size: 1.25rem;
          }
        }
      }

      ul.social_btns {
        padding-bottom: 20px;
        margin-bottom: 10px;
        font-size: 3rem;

        li.line_btn {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
