import * as apiService from '../api.js';

const indexLayout = async (req, res) => {
    const [result, data] = await apiService.get('index.php?g=Api&m=Index&a=index', {});

    return [result, data];
}

export {
    indexLayout,
}