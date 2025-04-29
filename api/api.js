
export async function get(url, params = {}) {
  const { data, status, error, refresh } = await useFetch(url, {
    method: 'GET',
    baseURL: `${urlBase}`,
    params: params,
    headers: {
      Authorization: useCookie('token').value,
    },
  })

  if (status.value === 'success') {
    return [!data.value.status, data.value.data, data.value.info]
  } else {
    return [false, null]
  }
}

export async function post(url, params = {}) {
  const { data, status, error, refresh } = await useFetch(url, {
    method: 'POST',
    baseURL: `${urlBase}`,
    body: params,

    onRequest({ request, options }) {
      const token = useCookie('token').value
      options.headers.set('Authorization', token)
    },

    async onResponse({ request, response, options }) {

      if(response._data.data.code == 401){
        const store = authStore()
        const { data, status } = await useFetch('index.php?g=Api&m=Login&a=checkTokenExpired', {
          method: 'POST',
          baseURL: `${urlBase}`,
          headers: {
            Authorization: useCookie('token').value,
          },
        }) 

        await store.setLogin(null,data.value.data.token)

        return refresh()
      }
    },
  })

  if (status.value === 'success') {
    return [!data.value.status, data.value.data, data.value.info]
  } else {
    return [false, null]
  }
}
