export function useLoginApi() {
  const { get, post } = useApiFetch()

  const getLogin = async (req) => {
    const [result, data] = await post('index.php?g=Api&m=Login&a=login', req)
    return [result, data]
  }

  const reflashToken = async (req) => {
    const [result, data] = await post(
      'index.php?g=Api&m=Login&a=checkTokenExpired',
      req
    )
    return [result, data]
  }

  const getRegister = async (req) => {
    const [result, data] = await post('index.php?g=Api&m=Login&a=reg', req)
    return [result, data]
  }

  return {
    getLogin,
    reflashToken,
    getRegister,
  }
}
