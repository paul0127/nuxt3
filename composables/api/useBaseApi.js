export function useBaseApi() {
  const { $get, $post } = useNuxtApp()

  const getHeaderData = async (req, res) => {
    const {result, data} = await $get('index.php?g=Api&m=Base&a=topinfo', {})

    return [result, data]
  }

  const getFooterData = async (req, res) => {
    const {result, data} = await $get('index.php?g=Api&m=Base&a=baseInfo', {})

    return [result, data]
  }

  const indexLayout = async (req, res) => {
    const {result, data} = await $get('index.php?g=Api&m=Index&a=index', {})

    return [result, data]
  }

  return {
    getHeaderData,
    getFooterData,
    indexLayout,
  }
}
