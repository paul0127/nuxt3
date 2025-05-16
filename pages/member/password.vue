<script setup lang="ts">
import type { FormRules, FormItemRule } from 'element-plus'

import { useMemberApi } from '~/composables/api'

import type { RePasswordData } from '~/types'

const { saveMemberPassword } = useMemberApi()

const formEl = useTemplateRef<HTMLFormElement>('formEl')
const dataBase = ref<RePasswordData>({
  old_password: '',
  new_password: '',
  re_password: '',
})

const validatePass: NonNullable<FormItemRule['validator']> = (
  rule,
  value,
  callback
) => {
  if (value === '') {
    callback(new Error('請輸入新的密碼'))
  } else {
    const regex = /^[A-Za-z0-9]{6,}$/
    if (!regex.test(value)) {
      callback(new Error('需輸入6個字元以上的英文字母及數字，不可使用特殊符號'))
    } else {
      callback()
    }
  }
}

const validateRePass: NonNullable<FormItemRule['validator']> = (
  rule,
  value,
  callback
) => {
  if (value === '') {
    callback(new Error('請再輸入一次新的密碼'))
  } else {
    if (dataBase.value.new_password !== dataBase.value.re_password) {
      callback(new Error('兩次輸入的密碼不相同'))
    } else {
      callback()
    }
  }
}

const rules: FormRules = reactive({
  old_password: [{ required: true, message: '請輸入舊密碼', trigger: 'blur' }],
  new_password: [{ validator: validatePass, trigger: 'blur' }],
  re_password: [{ validator: validateRePass, trigger: 'blur' }],
})

const savePassword = async () => {
  if (!formEl.value) return
  await formEl.value.validate()
  const [result, data, info] = await saveMemberPassword({
    old_password: dataBase.value.old_password,
    new_password: dataBase.value.new_password,
  })
  if (result) {
    ElNotification({
      title: '成功修改密碼',
      message: '已修改密碼',
      type: 'success',
    })

    formEl.value.resetFields()
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
    <div class="m_title">更改密碼</div>
    <div class="form">
      <div class="list">
        <el-form
          ref="formEl"
          :model="dataBase"
          label-width="auto"
          :rules="rules"
        >
          <el-form-item label="目前的密碼" prop="old_password">
            <el-input
              type="password"
              v-model="dataBase.old_password"
              placeholder="舊密碼"
            />
          </el-form-item>
          <el-form-item label="新密碼" prop="new_password">
            <el-input
              type="password"
              v-model="dataBase.new_password"
              placeholder="請輸入新密碼"
            />
            <span class="alert_text"
              >*請輸入6個字元以上的英文字母及數字，不可使用特殊符號</span
            >
          </el-form-item>
          <el-form-item label="新密碼確認" prop="re_password">
            <el-input
              type="password"
              v-model="dataBase.re_password"
              placeholder="請再次輸入新密碼"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="send"><a @click="savePassword()">確定修改</a></div>
    </div>
  </div>
</template>
<style lang="scss" src="./form.scss" scoped />
