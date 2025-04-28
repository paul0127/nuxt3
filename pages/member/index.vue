<script setup>
import { getMemberInfo, saveMemberInfo } from '~/api/api/member'

const dataBase = ref({
  account: '',
  birthday: '',
  name: '',
  phone: '',
  sex: 0,
})
const getMemberInfoApi = async () => {
  const [result, data] = await getMemberInfo()
  dataBase.value = data
}
await getMemberInfoApi()

const saveMemberInfoApi = async () => {
  const [result, data] = await saveMemberInfo(dataBase.value)
  if (result) {
    alert('修改成功')
  } else {
    alert('修改失敗')
  }
}

definePageMeta({
  layout: 'member',
})
</script>
<template>
  <div>
    <div class="m_title" @click="getMemberInfoApi">個人資訊</div>
    <div class="form">
      <div class="list">
        <div class="item">
          <label for="">姓名</label>
          <input
            type="text"
            v-model="dataBase.name"
            placeholder="請輸入您的姓名"
          />
        </div>
        <div class="item">
          <label for="">帳號/Email</label>
          <input
            type="text"
            v-model="dataBase.account"
            placeholder="請輸入您的信箱"
          />
        </div>
        <div class="item">
          <label for="">出生日期</label>
          <div class="birth_type">
            <input type="text" placeholder="西元" /><span>年</span>
            <select name="" id="">
              <option value="">1</option>
              <option value="">12</option></select
            ><span>月</span>
            <select name="" id="">
              <option value="">1</option></select
            ><span>日</span>
          </div>
        </div>
        <div class="item">
          <label for="">手機</label>
          <input
            type="text"
            v-model="dataBase.phone"
            placeholder="請輸入您的手機"
          />
        </div>
        <div class="item inline">
          <label for="">性別</label>
          <div class="radio_type">
            <input
              type="radio"
              v-model="dataBase.sex"
              :value="1"
              name="type"
              id="type_0"
            />
            <label for="type_0"><span class="circle"></span>男</label>
            <input
              type="radio"
              v-model="dataBase.sex"
              :value="0"
              name="type"
              id="type_1"
            />
            <label for="type_1"><span class="circle"></span>女</label>
          </div>
        </div>
      </div>
      <div class="send"><a @click="saveMemberInfoApi">確定修改</a></div>
    </div>
  </div>
</template>
<style lang="scss" src="./form.scss" scoped />
