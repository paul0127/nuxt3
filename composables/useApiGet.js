export function useApiGet() {
    const token = useCookie('token')
    const store = authStore()
  
    const refreshToken = async () => {
      const { data } = await useFetch('index.php?g=Api&m=Login&a=checkTokenExpired', {
        method: 'POST',
        baseURL: urlBase,
        headers: {
          Authorization: token.value,
        },
      })
  
      if (data.value?.data?.token) {
        token.value = data.value.data.token
        await store.setLogin(null, data.value.data.token)
        return true
      }
  
      return false
    }
  
    const get = async (url, params = {}, retried = false) => {
      const { data, status } = await useFetch(url, {
        method: 'GET',
        baseURL: urlBase,
        params,
        headers: {
          Authorization: token.value,
        },
      })
  
      if (data.value?.data?.code === 401 && !retried) {
        const refreshed = await refreshToken()
        if (refreshed) {
          return await get(url, params, true) // 重試一次
        }
      }
  
      if (status.value === 'success') {
        return [!data.value.status, data.value.data, data.value.info]
      } else {
        return [false, null]
      }
    }
  
    return { get }
  }
  