import * as apiService from '../api.js';

const getProductList = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=Product&a=index', req);

    return [result, data];
}

const getProduct = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=Product&a=info', req);

    return [result, data];
}

const getProductItems = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=Product&a=get_items', req);

    return [result, data];
}

const toLove = async (req, res) => {
    const [result, data, info] = await apiService.post('index.php?g=Api&m=Product&a=toLove', req);

    return [result, data, info];
}

const addCart = async (req, res) => {
    const [result, data] = await apiService.post('index.php?g=Api&m=Gwc&a=gwcTemp', req);

    return [result, data];
}

const getCartDetail = async(req,res) => {
    const [result, data, info] = await apiService.post('index.php?g=Api&m=Product&a=getProductDetail', req);

    return [result, data, info];
}

export {
    getProductList,
    getProduct,
    getProductItems,
    toLove,
    addCart,
    getCartDetail
}