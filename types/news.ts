export interface NewsListInfo {
  id: number
  cname: string
  Keywords: string
  Descript: string
}

export interface NewsInfo {
  n_id: number
  n_title: string
  n_pic: string
  n_pubdate: string
  timer: string
}

export interface NewsListResponse {
  info: NewsListInfo
  list: NewsInfo[]
  limit: number
  page: number
  total: number
}

export interface NewsDetailInfo extends Omit<NewsInfo, 'n_pic' | 'timer'> {
  classname: string
  descript: string
  keywords: string
  n_content: string
  pc_code: number
}
