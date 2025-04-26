import * as apiService from '../api.js';

const getHeaderData = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=Base&a=topinfo', req);

    return [result, data];
}

const getFooterData = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=Base&a=baseInfo', req);

    return [result, data];
}

export {
    getHeaderData,
    getFooterData
}