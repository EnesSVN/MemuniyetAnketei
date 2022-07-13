import axios from 'axios';

export const createAnket = (body) => {
    return axios
        .post('http://localhost:8081/api/anket/create',body)
}