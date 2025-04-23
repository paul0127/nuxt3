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

export {
    getProductList,
    getProduct,
    getProductItems
}