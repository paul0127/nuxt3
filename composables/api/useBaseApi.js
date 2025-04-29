export function useBaseApi() {
  const { get, post } = useApiFetch()

  const getHeaderData = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=Base&a=topinfo', req)

    return [result, data]
  }

  const getFooterData = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=Base&a=baseInfo', req)

    return [result, data]
  }

  const indexLayout = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=Index&a=index', {})

    return [result, data]
  }

  return {
    getHeaderData,
    getFooterData,
    indexLayout,
  }
}
