<script setup lang="ts">
import type { FormRules, FormItemRule } from 'element-plus'
import type { RegisterFormData } from '~/types'

const dataBase = ref<RegisterFormData>({
  account: '',
  name: '',
  birthday: '',
  phone: '',
  sex: 1,
  password: '',
  repassword: '',
})

const store = authStore()
const router = useRouter()

const formEl = useTemplateRef<HTMLFormElement>('formEl')
const { validatePhone } = useCheckoutValidation()

const validateCheckPhone: NonNullable<FormItemRule['validator']> = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('請輸入電話'))
  } else {
    if (validatePhone(value)) {
      callback()
    } else {
      callback(new Error('電話格式不正確'))
    }
  }
}

const validatePass: NonNullable<FormItemRule['validator']> = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('請輸入密碼'))
  } else {
    const regex = /^[A-Za-z0-9]{6,}$/
    if (!regex.test(value)) {
      callback(new Error('需輸入6個字元以上的英文字母及數字，不可使用特殊符號'))
    } else {
      callback()
    }
  }
}

const validateRePass: NonNullable<FormItemRule['validator']> = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('請再輸入一次密碼'))
  } else {
    if (dataBase.value.password !== dataBase.value.repassword) {
      callback(new Error('兩次輸入的密碼不相同'))
    } else {
      callback()
    }
  }
}

const rules: FormRules = reactive({
  account: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
  birthday: [{ required: true, message: '請輸入生日', trigger: 'blur' }],
  name: [{ required: true, message: '請輸入姓名', trigger: 'blur' }],
  phone: [{ required: true, validator: validateCheckPhone, trigger: 'blur' }],
  sex: [{ required: true, message: '請輸入性別', trigger: 'blur' }],
  password: [{ required: true, validator: validatePass, trigger: 'blur' }],
  repassword: [{ required: true, validator: validateRePass, trigger: 'blur' }],
})

const register = async () => {
  if (!formEl.value) return
  await formEl.value.validate()

  const { account, password, name, birthday, phone, sex } = dataBase.value
  const [result, data, info] = await store.register({
    account,
    password,
    name,
    birthday,
    phone,
    sex,
  })
  if (result) {
    ElNotification({
      title: '成功',
      message: '已註冊成功',
      type: 'success',
    })
    router.push('/member')
  } else {
    ElNotification({
      title: 'Error',
      message: info,
      type: 'error',
    })
  }
}

const resetForm = () => {
  if (!formEl.value) return
  formEl.value.resetFields()
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
          <el-form
            ref="formEl"
            :inline="true"
            :model="dataBase"
            :rules="rules"
            label-width="auto"
          >
            <el-form-item label="帳號/Email" prop="account">
              <el-input
                v-model="dataBase.account"
                placeholder="請輸入您的信箱"
              />
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="dataBase.name" placeholder="請輸入您的姓名" />
            </el-form-item>
            <el-form-item label="出生日期" prop="birthday">
              <el-date-picker
                v-model="dataBase.birthday"
                type="date"
                placeholder="請選擇你的出生日期"
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
            <el-form-item />
            <el-form-item label="密碼" prop="password">
              <el-input
                type="password"
                v-model="dataBase.password"
                placeholder="請輸入您的密碼"
              />
            </el-form-item>
            <el-form-item label="再次密碼確認" prop="repassword">
              <el-input
                type="password"
                v-model="dataBase.repassword"
                placeholder="再次輸入您的密碼"
              />
            </el-form-item>
          </el-form>
        </div>
        <div class="btns">
          <div class="send_btn" @click="register">送出</div>
          <div class="clear_btn" @click="resetForm">清除</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./register.scss" />
<style lang="scss" scoped>
.inputs {
  :deep(.el-form) {
    flex: 0 0 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    .el-form-item {
      margin-right: 0;
      margin-left: 0 !important;
      margin-bottom: 30px;
      display: block;
      &.is-error {
        .el-form-item__content {
          .el-input__wrapper {
            box-shadow: 0 0 0 1px var(--el-color-danger) inset;
          }
        }
      }
      .el-form-item__label-wrap {
        margin-left: 0 !important;
        .el-form-item__label {
          font-size: 1.35rem;
          color: #000;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
      .el-form-item__content {
        width: 450px;
        .el-form-item__error {
          font-size: 12px;
          margin-top: 5px;
        }
        .el-input__wrapper {
          box-shadow: 0 0 0 1px #707070 inset;

          .el-input__inner {
            font-size: 1.35rem;
            height: 3rem;
            line-height: 3rem;
          }
        }
        .el-date-editor {
          width: 100%;
          height: 3rem;
          .el-input__prefix {
            svg {
              width: 2rem;
              height: 2rem;
            }
          }
        }
      }
    }
  }
}
</style>
