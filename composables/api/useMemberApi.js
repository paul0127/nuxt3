export function useMemberApi() {
  const { get, post } = useApiFetch()

  const getMemberInfo = async (req, res) => {
    const [result, data] = await post(
      'index.php?g=Api&m=Member&a=mem_data',
      req
    )

    return [result, data]
  }

  const saveMemberInfo = async (req, res) => {
    const [result, data] = await post(
      'index.php?g=Api&m=Member&a=doEditInfo',
      req
    )

    return [result, data]
  }

  return {
    getMemberInfo,
    saveMemberInfo,
  }
}
