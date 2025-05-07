export function usePageApi() {
  const { $get, $post } = useNuxtApp()

  const pageData = async (req, res) => {
    const {result, data} = await $get('index.php?g=Api&m=Content&a=index', req)

    return [result, data]
  }

  return {
    pageData,
  }
}
