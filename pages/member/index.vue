<script setup>
import { useMemberApi } from '~/composables/api'

const { getMemberInfo, saveMemberInfo } = useMemberApi()

const dataBase = ref({
  account: '',
  birthday: '',
  name: '',
  phone: '',
  sex: 0,
})
const getMemberInfoApi = async () => {
  const [result, data] = await getMemberInfo()
  if (result) {
    dataBase.value = data
  }
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
          <label for="">帳號/Email</label>
          <el-input
            v-model="dataBase.account"
            disabled
            placeholder="請輸入您的姓名"
          />
        </div>
        <div class="item">
          <label for="">姓名</label>
          <el-input v-model="dataBase.name" placeholder="請輸入您的姓名" />
        </div>
        <div class="item">
          <label for="">出生日期</label>
          <div class="birth_type">
            <el-date-picker
              v-model="dataBase.birthday"
              type="date"
              placeholder="Pick a day"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
            />
          </div>
        </div>
        <div class="item">
          <label for="">手機</label>
          <el-input
            v-model="dataBase.phone"
            placeholder="請輸入您的手機"
          />
        </div>
        <div class="item inline">
          <label for="">性別</label>
          <el-radio-group v-model="dataBase.sex">
            <el-radio :value="1" size="large">男</el-radio>
            <el-radio :value="0" size="large">女</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="send"><a @click="saveMemberInfoApi">確定修改</a></div>
    </div>
  </div>
</template>
<style lang="scss" src="./form.scss" scoped />
