export function useCartApi() {
  const { get, post } = useApiFetch()

  const addCart = async (req, res) => {
    const [result, data] = await post('index.php?g=Api&m=Gwc&a=gwcTemp', req)

    return [result, data]
  }

  const getCartDetail = async (req, res) => {
    const [result, data, info] = await post(
      'index.php?g=Api&m=Product&a=getProductDetail',
      req
    )

    return [result, data, info]
  }

  return {
    addCart,
    getCartDetail,
  }
}
