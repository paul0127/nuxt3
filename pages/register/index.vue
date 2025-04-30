<script setup>
const input = ref({
  account: '',
  password: '',
  repassword:'',
  name:''
})

const store = authStore()
const router = useRouter()

const register = async () => {
  if (!input.value.account || !input.value.password || !input.value.name) {
    alert('請輸入帳號和密碼和姓名')
    return
  }

  if(input.value.password !== input.value.repassword) {
    alert('兩次密碼輸入不相同')
    return
  }

  const { account, password, name } = input.value
  const result = await store.register({ account, password, name })
  if (result) {
    router.push('/member')
  } else {
    // alert('登入失敗，請檢查帳號和密碼')
  }
}
</script>
<template>
  <div class="container custom">
    <commonTitle
      :breads="[
        {
          name: '會員專區',
          link: '#',
        },
      ]"
    />
    <div class="page regist_info">
      <div class="info">
        <div class="info_title">
          <font-awesome-icon class="icon-left" :icon="['fab', 'pagelines']" />
          <div class="title_inner">
            <div class="b_title">MEMBER</div>
            <div class="s_title">會員註冊</div>
          </div>
          <font-awesome-icon class="icon-right" :icon="['fab', 'pagelines']" />
        </div>
        <div class="inputs">
          <div class="input">
            <label for="">帳號/Email</label>
            <input type="text" v-model="input.account" placeholder="請輸入您的信箱" />
          </div>
          <div class="input">
            <label for="">姓名</label>
            <input type="text" v-model="input.name" placeholder="請輸入您的姓名" />
          </div>
          <div class="input">
            <label for="">密碼</label>
            <input type="password" v-model="input.password" placeholder="請輸入您的密碼" />
          </div>
          <div class="input">
            <label for="">再次密碼確認</label>
            <input type="password" v-model="input.repassword" placeholder="再次輸入您的密碼" />
          </div>
        </div>
        <div class="btns">
          <div class="send_btn" @click="register">送出</div>
          <div class="clear_btn">清除</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./register.scss" />
