import * as apiService from '../api.js';

const getNewsList = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=News&a=index', req);

    return [result, data];
}

const getNews = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=News&a=info', req);

    return [result, data];
}

export {
    getNewsList,
    getNews
}