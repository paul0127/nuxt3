// plugins/apiFetch.ts
export default defineNuxtPlugin(() => {
  const token = useCookie('token')
  const store = authStore()
  const urlBase = 'https://php.e-office.tw/'

  const refreshToken = async () => {
    const { data } = await useFetch(
      'index.php?g=Api&m=Login&a=checkTokenExpired',
      {
        method: 'POST',
        baseURL: urlBase,
        headers: {
          Authorization: token.value,
        },
      }
    )

    if (data.value?.data?.token) {
      token.value = data.value.data.token
      await store.setLogin(null, data.value.data.token)
      return true
    }

    return false
  }

  const apiFetch = async (method:string ,url: string, params = {},options: any = {}): Promise<{ data: any; result: boolean, info?: string, refresh:void }> => {
    
    let mergedOptions = {}
    if(method=='GET'){
      mergedOptions = {
        method,
        baseURL: urlBase,
        params,
        headers: {
          Authorization: token.value,
          ...(options.headers || {}),
        },
        ...options,
      }
    }else{
      mergedOptions = {
        method,
        baseURL: urlBase,
        body:params,
        headers: {
          Authorization: token.value,
          ...(options.headers || {}),
        },
        ...options,
      }
    }
    
    const { data, status, refresh } = await useFetch(url, mergedOptions)

    if (data.value?.data?.code === 401) {
      const refreshed = await refreshToken()
      if (refreshed) {
        return await get(url, params) // 重試一次
      }
    }

    if (status.value === 'success') {
      return {result:!data.value.status, data:data.value.data, info:data.value.info, refresh}
    } else {
      return {result:false, data:null}
    }
  }

  const get = async (url: string, params = {},options: any = {}) => {
    const res = await apiFetch('GET', url, params, options)

    return res
  }

  const post = async (url:string, params = {}, options: any = {}) => {
    const res = await apiFetch('POST', url, params, options)

    return res
  }

  return {
    provide: {
      get,
      post
    },
  }
})
