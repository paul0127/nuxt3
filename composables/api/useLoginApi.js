export function useLoginApi() {
  const { $get, $post } = useNuxtApp()

  const getLogin = async (req) => {
    const { result, data } = await $post('index.php?g=Api&m=Login&a=login', req)
    return [result, data]
  }

  const reflashToken = async (req) => {
    const { result, data } = await $post(
      'index.php?g=Api&m=Login&a=checkTokenExpired',
      req
    )
    return [result, data]
  }

  const getRegister = async (req) => {
    const { result, data, info } = await $post(
      'index.php?g=Api&m=Login&a=reg',
      req
    )
    return [result, data, info]
  }

  return {
    getLogin,
    reflashToken,
    getRegister,
  }
}
