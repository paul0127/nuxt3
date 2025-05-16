export interface IndexBannerList {
  l_id: number
  l_pic: string
  l_url: string
}

export interface IndexNewsList {
  n_id: number
  n_title: string
  n_pic: string
  n_pubdate: string
  timer: string
}

export interface IndexBrandList {
  id: number
  name: string
  pic: string
}

export interface IndexProductList {
  p_id: number
  p_title: string
  pic: string
  market_price: number
  selling_price: number
  url: string
}

export interface IndexAdvList {
  pic: string
  url: string
}

export interface IndexTypeMap {
  news: IndexNewsList
  brands: IndexBrandList
  products: IndexProductList
  adv: IndexAdvList
  content: string
}

export interface IndexBlock<T extends keyof IndexTypeMap> {
  name: string
  ename: string
  lx: T
  block: T extends 'content' ? IndexTypeMap[T] : IndexTypeMap[T][]
}

export interface IndexLayout {
  banner_list: IndexBannerList[]
  out: IndexBlock<keyof IndexTypeMap>[]
}
