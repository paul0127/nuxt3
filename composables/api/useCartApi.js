export function useCartApi() {
  const { $get, $post } = useNuxtApp()

  const addCart = async (req, res) => {
    const {result, data} = await $post('index.php?g=Api&m=Gwc&a=gwcTemp', req)

    return [result, data]
  }

  const getCartDetail = async (req, res) => {
    const {result, data, info} = await $post(
      'index.php?g=Api&m=Product&a=getProductDetail',
      req
    )

    return [result, data, info]
  }

  const getLogistics = async (req, res) => {
    const {result, data} = await $post(
      'index.php?g=Api&m=Gwc&a=get_logistics',
      req
    )

    return [result, data]
  }

  const getPayment = async (req, res) => {
    const {result, data} = await $post(
      'index.php?g=Api&m=Gwc&a=get_payment',
      req
    )

    return [result, data]
  }

  return {
    addCart,
    getCartDetail,
    getLogistics,
    getPayment
  }
}
