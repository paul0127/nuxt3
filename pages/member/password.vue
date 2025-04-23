<script setup>
definePageMeta({
  layout: 'member',
})
</script>
<template>
  <div>
    <div class="m_title">更改密碼</div>
    <div class="form">
      <div class="list">
        <div class="item full">
          <label for="">目前的密碼</label>
          <input type="text" placeholder="舊密碼" />
        </div>
        <div class="item full">
          <label for="">新密碼</label>
          <input type="text" placeholder="新輸入新密碼" />
          <span class="alert_text"
            >*請輸入6個字元以上的英文字母及數字，不可使用特殊符號</span
          >
        </div>
        <div class="item full">
          <label for="">新密碼確認</label>
          <input type="text" placeholder="請再次輸入新密碼" />
        </div>
      </div>
      <div class="send"><a href="">確定修改</a></div>
    </div>
  </div>
</template>
<style lang="scss" src="./form.scss" scoped />
