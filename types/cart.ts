export interface cartList {
  p_id: number
  p_title: string
  pic: string
  qty: number
  s_id: number
  specification: string
  market_price: number
  selling_price: number
  url: string
}

export interface receiveData {
  CVSAddress: string | null
  CVSStoreID: string | null
  CVSStoreName: string | null
  address: string | null
  companyNo: string
  companyTitle: string
  county: string | null
  dist: string | null
  invoice_type: number
  logistics: string | null
  memo: string
  name: string
  payment: number | null
  phone: string
}

export interface logistics {
  limit_price: number
  logistics_id: number | string
  name: string
  open: boolean
  s_name: string
  type: number
  value: number
  xh: number
}
