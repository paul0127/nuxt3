export async function get(url, params={}) {
    const { data, status, error, refresh } = await useFetch(url, {
        method: 'GET',
        baseURL: `${urlBase}`,
        params: params,
    })

    return [status, data.value.data]
}

export async function post(url, params={}) {
    const { data, status, error, refresh } = await useFetch(url, {
        method: 'POST',
        baseURL: `${urlBase}`,
        body: params,
    })

    return [status, data.value.data]
}