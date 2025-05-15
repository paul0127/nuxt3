export interface ProductListInfo {
  id: string
  cname: string
  Descript: string
  Keywords: string
}

export interface ProductItem {
  p_id: number
  p_title: string
  descript: string
  pic: string
  market_price: number
  selling_price: number
}

export interface ProductListResponse {
  list: ProductItem[]
  total: number
  page: number
  limit: number
  info: ProductListInfo
  order: string
}

export interface Specification {
  id: number
  is_stock: boolean
  limit_qty: number
  name: string
  qty: number
  market_price: number
  selling_price: number
}

export interface ProductDetailItem
  extends Omit<ProductItem, 'pic' | 'market_price' | 'selling_price'> {
  keywords: string
  feature: string
  creator: string
  author: number
  loved: boolean
  p_content: string
  class: {
    cname: string
    id: number
  }
  res: Array<{ pic: string; s_pic: string; img?: string }>
}

export interface ProductDetailInfo {
  info: ProductDetailItem
  p_list: (ProductItem & { url: string })[]
  specification: Specification[]
}
