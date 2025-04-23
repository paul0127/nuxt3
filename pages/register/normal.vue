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
            <input type="text" placeholder="請輸入您的信箱" />
          </div>
          <div class="input">
            <label for="">姓名</label>
            <input type="text" placeholder="請輸入您的姓名" />
          </div>
          <div class="input">
            <label for="">密碼</label>
            <input type="password" placeholder="請輸入您的密碼" />
          </div>
          <div class="input">
            <label for="">再次密碼確認</label>
            <input type="password" placeholder="再次輸入您的密碼" />
          </div>
          <div class="input">
            <label for="">推薦代碼</label>
            <div class="sale_code">
              <div class="select_sale_code">
                Ray (1234)
                <span class="del"><i class="fas fa-times-circle"></i></span>
              </div>
              <input type="text" placeholder="請輸入推薦代碼" />
              <ul class="sale_code_list">
                <li><span>1213</span></li>
                <li><span>1213</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="btns">
          <div class="send_btn">送出</div>
          <div class="clear_btn">清除</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./register.scss" />
