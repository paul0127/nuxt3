export interface MemberFormData {
  account: string
  name: string
  birthday: string
  phone: string
  sex: number
}

export interface RegisterFormData extends MemberFormData {
  password: string
  repassword: string
}

export interface RePasswordData {
  old_password: string
  new_password: string
  re_password: string
}

export interface LoginFormData {
  email: string
  password: string
}
