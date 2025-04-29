export function useApiClient() {
    const { get } = useApiGet()
    const { post } = useApiPost()

    const getHeaderData = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Base&a=topinfo', req);
    
        return [result, data];
    }
    
    const getFooterData = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Base&a=baseInfo', req);
    
        return [result, data];
    }

    const indexLayout = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Index&a=index', {});
    
        return [result, data];
    }

    const pageData = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Content&a=index', req);
    
        return [result, data];
    }

    const getNewsList = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=News&a=index', req);
    
        return [result, data];
    }
    
    const getNews = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=News&a=info', req);
    
        return [result, data];
    }

    const getBrandList = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Creator&a=index', req);
    
        return [result, data];
    }
    
    const getBrandProductList = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Creator&a=info', req);
    
        return [result, data];
    }

    const getProductList = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Product&a=index', req);
    
        return [result, data];
    }
    
    const getProduct = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Product&a=info', req);
    
        return [result, data];
    }
    
    const getProductItems = async (req, res) => {
        const [result, data] = await get('index.php?g=Api&m=Product&a=get_items', req);
    
        return [result, data];
    }
    
    const toLove = async (req, res) => {
        const [result, data, info] = await post('index.php?g=Api&m=Product&a=toLove', req);
    
        return [result, data, info];
    }
    
    const addCart = async (req, res) => {
        const [result, data] = await post('index.php?g=Api&m=Gwc&a=gwcTemp', req);
    
        return [result, data];
    }
    
    const getCartDetail = async(req,res) => {
        const [result, data, info] = await post('index.php?g=Api&m=Product&a=getProductDetail', req);
    
        return [result, data, info];
    }
  
    const getLogin = async (req) => {
      const [result, data] = await post('index.php?g=Api&m=Login&a=login', req)
      return [result, data]
    }
  
    const reflashToken = async (req) => {
      const [result, data] = await post('index.php?g=Api&m=Login&a=checkTokenExpired', req)
      return [result, data]
    }
  
    const getRegister = async (req) => {
      const [result, data] = await post('index.php?g=Api&m=Login&a=reg', req)
      return [result, data]
    }

    const getMemberInfo = async (req, res) => {
        const [result, data] = await post('index.php?g=Api&m=Member&a=mem_data', req);
    
        return [result, data];
    }
    
    const saveMemberInfo = async (req, res) => {
        const [result, data] = await post('index.php?g=Api&m=Member&a=doEditInfo', req);
    
        return [result, data];
    }
  
    return {
      getHeaderData,
      getFooterData,
      indexLayout,
      pageData,
      getNewsList,
      getNews,
      getBrandList,
      getBrandProductList,
      getProductList,
      getProduct,
      getProductItems,
      toLove,
      addCart,
      getCartDetail,
      getLogin,
      reflashToken,
      getRegister,
      getMemberInfo,
      saveMemberInfo
    }
  }
  