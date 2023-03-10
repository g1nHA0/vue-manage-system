import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: 'api/event/corr',
        method: 'get'
    });
};
