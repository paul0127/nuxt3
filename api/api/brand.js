import * as apiService from '../api.js';

const getBrandProductList = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=Creator&a=info', req);

    return [result, data];
}

export {
    getBrandProductList,
}