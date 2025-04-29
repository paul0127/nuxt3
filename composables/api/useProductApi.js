export function useProductApi() {
  const { get, post } = useApiFetch()

  const getProductList = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=Product&a=index', req)

    return [result, data]
  }

  const getProduct = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=Product&a=info', req)

    return [result, data]
  }

  const getProductItems = async (req, res) => {
    const [result, data] = await get(
      'index.php?g=Api&m=Product&a=get_items',
      req
    )

    return [result, data]
  }

  const toLove = async (req, res) => {
    const [result, data, info] = await post(
      'index.php?g=Api&m=Product&a=toLove',
      req
    )

    return [result, data, info]
  }

  return {
    getProductList,
    getProduct,
    getProductItems,
    toLove,
  }
}
