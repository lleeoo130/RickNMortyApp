import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

const BaseProvider = {
    get : (uri) => {
        if ('string' === typeof uri && uri.includes(BASE_URL)) uri = uri.replace(BASE_URL, '');

        return axios.get(BASE_URL + uri);
    }
};

export default BaseProvider;