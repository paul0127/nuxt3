<script setup>
import { useMemberApi } from '~/composables/api'

const { getMemberInfo, saveMemberInfo } = useMemberApi()

const formEl = useTemplateRef('formEl')
const dataBase = ref({
  account: '',
  birthday: '',
  name: '',
  phone: '',
  sex: 0,
})

const rules = reactive({
  account: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
  birthday: [{ required: true, message: '請輸入生日', trigger: 'blur' }],
  name: [{ required: true, message: '請輸入姓名', trigger: 'blur' }],
  phone: [{ required: true, message: '請輸入手機', trigger: 'blur' }],
  sex: [{ required: true, message: '請輸入性別', trigger: 'blur' }],
})

const getMemberInfoApi = async () => {
  const [result, data] = await getMemberInfo()
  if (result) {
    dataBase.value = data
  }
}
await getMemberInfoApi()

const saveMemberInfoApi = async () => {
  await formEl.value.validate()
  const [result, data, info] = await saveMemberInfo(dataBase.value)
  if (result) {
    ElNotification({
      title: '成功',
      message: '已修改資料',
      type: 'success',
    })
  } else {
    ElNotification({
      title: 'Error',
      message: info,
      type: 'error',
    })
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
        <el-form
          ref="formEl"
          :inline="true"
          :model="dataBase"
          :rules="rules"
          :label-width="120"
        >
          <el-form-item label="帳號/Email" prop="account">
            <el-input :value="dataBase.account" disabled />
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="dataBase.name" placeholder="請輸入您的姓名" />
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker
              v-model="dataBase.birthday"
              type="date"
              placeholder="Pick a day"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
            />
          </el-form-item>
          <el-form-item label="手機" prop="phone">
            <el-input v-model="dataBase.phone" placeholder="請輸入您的手機" />
          </el-form-item>
          <el-form-item label="性別" prop="sex">
            <el-radio-group v-model="dataBase.sex">
              <el-radio :value="1" size="large">男</el-radio>
              <el-radio :value="0" size="large">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <div class="send"><a @click="saveMemberInfoApi">確定修改</a></div>
    </div>
  </div>
</template>
<style lang="scss" src="./form.scss" scoped />
<style lang="scss" scoped>
:deep(.el-input) {
  font-size: 1.25rem;
  &.el-date-editor {
    width: 100%;
  }
  .el-radio.el-radio--large .el-radio__label {
    font-size: 1.25rem;
  }
  .el-input__wrapper {
    border: 1px solid #707070;
    padding: 5px 10px;
  }
}
</style>
