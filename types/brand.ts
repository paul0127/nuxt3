import type { ProductItem } from './product'
export interface BrandList {
  id: number
  name: string
  pic: string
}

export interface BrandInfo extends BrandList {
  descript: string
}

export interface classList {
  id: number
  cname: string
}

export interface BrandInfoResponse {
  class_list: classList[]
  info: BrandInfo
  list: ProductItem[]
  limit: number
  page: number
  total: number
}
