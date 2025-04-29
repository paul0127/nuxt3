export function useBrandApi() {
  const { get, post } = useApiFetch()

  const getBrandList = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=Creator&a=index', req)

    return [result, data]
  }

  const getBrandProductList = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=Creator&a=info', req)

    return [result, data]
  }

  return {
    getBrandList,
    getBrandProductList,
  }
}
