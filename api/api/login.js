import * as apiService from '../api.js';

const getLogin = async (req, res) => {
    const [result, data] = await apiService.post('index.php?g=Api&m=Login&a=login', req);

    return [result, data];
}

export {
    getLogin,
}