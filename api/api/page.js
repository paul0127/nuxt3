import * as apiService from '../api.js';

const pageData = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=Content&a=index', req);

    return [result, data];
}

export {
    pageData,
}