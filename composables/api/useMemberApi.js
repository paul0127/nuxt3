export function useMemberApi() {
  const { $get, $post } = useNuxtApp()

  const getMemberInfo = async (req, res) => {
    const {result, data} = await $post(
      'index.php?g=Api&m=Member&a=mem_data',
      req
    )

    return [result, data]
  }

  const saveMemberInfo = async (req, res) => {
    const {result, data, info} = await $post(
      'index.php?g=Api&m=Member&a=doEditInfo',
      req
    )

    return [result, data, info]
  }

  const saveMemberPassword = async (req, res) => {
    const {result, data, info} = await $post(
      'index.php?g=Api&m=Member&a=edit_password',
      req
    )

    return [result, data, info]
  }

  return {
    getMemberInfo,
    saveMemberInfo,
    saveMemberPassword
  }
}
