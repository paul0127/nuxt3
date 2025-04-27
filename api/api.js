export async function get(url, params = {}) {
  const { data, status, error, refresh } = await useFetch(url, {
    method: 'GET',
    baseURL: `${urlBase}`,
    params: params,
    headers:{
        Authorization: useCookie('token').value,
    }
  })

  if (status.value === 'success') {
    return [!data.value.status, data.value.data]
  } else {
    return [false, null]
  }
}

export async function post(url, params = {}) {
  const { data, status, error, refresh } = await useFetch(url, {
    method: 'POST',
    baseURL: `${urlBase}`,
    body: params,
    headers:{
        Authorization: useCookie('token').value,
    }
  })

  if (status.value === 'success') {
    return [!data.value.status, data.value.data]
  } else {
    return [false, null]
  }
}
