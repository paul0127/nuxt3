// composables/useCheckoutValidation.ts
import { ElNotification } from 'element-plus'

export function useCheckoutValidation() {
  const validateCart = (cartList: any[]) => {
    if (cartList.length <= 0) {
      ElNotification({
        title: 'Error',
        message: '目前購物車暫無商品',
        type: 'error',
      })
      return false
    }
    return true
  }

  const validatePaymentAndLogistics = (dataBase: any) => {
    if (dataBase.logistics == null || dataBase.payment == null) {
      ElNotification({
        title: 'Error',
        message: '請選擇付款方式及寄貨方式',
        type: 'error',
      })
      return false
    }
    return true
  }

  const validateRecipient = (dataBase: any) => {
    if (!dataBase.name || !dataBase.phone) {
      ElNotification({
        title: 'Error',
        message: '請填寫收件人姓名及連絡電話',
        type: 'error',
      })
      return false
    }

    const regex = /^((02|03|037|04|049|05|06|07|08|082|0836)\d{6,8}|09\d{8})$/
    if (!regex.test(dataBase.phone)) {
      ElNotification({
        title: 'Error',
        message: '電話格式不正確',
        type: 'error',
      })
      return false
    }

    return true
  }

  const validateInvoice = (dataBase: any) => {
    if (dataBase.invoice_type) {
      if (!dataBase.companyNo || !dataBase.companyTitle) {
        ElNotification({
          title: 'Error',
          message: '請填寫統一編號及發票抬頭',
          type: 'error',
        })
        return false
      }

      if (!validateUnifiedBusinessNo(dataBase.companyNo)) {
        ElNotification({
          title: 'Error',
          message: '統一編號格式錯誤',
          type: 'error',
        })
        return false
      }
    }

    return true
  }

  // composables/useFormValidation.ts (新增到其中)
  const validateUnifiedBusinessNo = (value: string) => {
    if (!/^\d{8}$/.test(value)) return false

    const weights = [1, 2, 1, 2, 1, 2, 4, 1]
    let sum = 0

    for (let i = 0; i < 8; i++) {
      const product = parseInt(value[i]) * weights[i]
      sum += Math.floor(product / 10) + (product % 10)
    }

    // 特例：第7位為7，且 sum % 10 為9 -> +1後也可整除
    if (parseInt(value[6]) === 7 && (sum + 1) % 10 === 0) return true

    return sum % 10 === 0
  }

  const validateAddress = (dataBase: any, logistics: any) => {
    if (
      logistics.type != 0 &&
      (!dataBase.CVSStoreID || !dataBase.CVSStoreName || !dataBase.CVSAddress)
    ) {
      ElNotification({
        title: 'Error',
        message: '請選擇超商地址',
        type: 'error',
      })
      return false
    }

    if (
      logistics.type == 0 &&
      (!dataBase.county || !dataBase.dist || !dataBase.address)
    ) {
      ElNotification({
        title: 'Error',
        message: '請選擇收件地址',
        type: 'error',
      })
      return false
    }

    return true
  }

  const validateAll = (cartList: any[], dataBase: any, logistics: any) => {
    return (
      validateCart(cartList) &&
      validatePaymentAndLogistics(dataBase) &&
      validateRecipient(dataBase) &&
      validateInvoice(dataBase) &&
      validateAddress(dataBase, logistics)
    )
  }

  return {
    validateCart,
    validatePaymentAndLogistics,
    validateRecipient,
    validateInvoice,
    validateAddress,
    validateAll,
  }
}
