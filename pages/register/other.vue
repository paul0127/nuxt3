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

        <div class="member_select">
          <label for="">申請會員項目</label>
          <select name="" id="">
            <option value="">請選擇您的申請會員項目</option>
            <option value="">員購會員</option>
            <option value="">團購會員</option>
            <option value="">專業會員</option>
          </select>
        </div>
        <div class="inputs">
          <div class="input">
            <label for="">帳號/Email</label>
            <input type="text" placeholder="請輸入您的信箱" />
          </div>
          <div class="input">
            <label for="">密碼</label>
            <input type="text" placeholder="請輸入您的密碼" />
          </div>
          <div class="input">
            <label for="">姓名</label>
            <input type="text" placeholder="請輸入您的姓名" />
          </div>
          <div class="input">
            <label for="">公司名稱</label>
            <input type="text" placeholder="請輸入您的公司名稱" />
          </div>
          <div class="input">
            <label for="">職稱</label>
            <input type="text" placeholder="請輸入您的職稱" />
          </div>
          <div class="input">
            <label for="">自營/員工</label>
            <select name="" id="">
              <option value="">請選擇自營/員工</option>
              <option value="">自營</option>
              <option value="">員工</option>
            </select>
          </div>
          <div class="input">
            <label for="">電話號碼</label>
            <input type="text" placeholder="請輸入您的姓名" />
          </div>
          <div class="input">
            <label for="">手機號碼</label>
            <input type="text" placeholder="請輸入您的手機號碼" />
          </div>
          <div class="input full">
            <label for="">聯絡地址</label>
            <div class="select">
              <select name="" id="">
                <option value="">請選擇縣市</option>
                <option value="">臺北市</option>
              </select>
              <select name="" id="">
                <option value="">請選擇區域</option>
                <option value="">中正區</option>
              </select>
              <input type="text" placeholder="郵遞區號" />
              <input
                class="input_full"
                type="text"
                placeholder="請輸入您的地址"
              />
            </div>
          </div>
          <div class="input">
            <label for="">FB/IG</label>
            <input type="text" placeholder="請輸入您的FB/IG" />
          </div>
          <div class="input">
            <label for="">line ID</label>
            <input type="text" placeholder="請輸入您的line ID" />
          </div>
          <div class="input">
            <label for="">推薦代碼</label>
            <input type="text" placeholder="請輸入推薦代碼" />
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
