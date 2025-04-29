export function useNewsApi() {
  const { get, post } = useApiFetch()

  const getNewsList = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=News&a=index', req)

    return [result, data]
  }

  const getNews = async (req, res) => {
    const [result, data] = await get('index.php?g=Api&m=News&a=info', req)

    return [result, data]
  }

  return {
    getNewsList,
    getNews,
  }
}
