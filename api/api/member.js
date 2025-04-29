import * as apiService from '../api.js';

const getMemberInfo = async (req, res) => {
    const [result, data] = await apiService.post('index.php?g=Api&m=Member&a=mem_data', req);

    return [result, data];
}

const saveMemberInfo = async (req, res) => {
    const [result, data] = await apiService.post('index.php?g=Api&m=Member&a=doEditInfo', req);

    return [result, data];
}

export {
    getMemberInfo,
    saveMemberInfo
}