import axios from 'axios';

export default function customAxios(url, callback) {
    axios({
        url: '/api' + url,
        methods: 'post',
        baseURL: 'http://localhost:8000',
        withCredentials: true,

    }).then(function (response) {
        callback(response.data);
    })
}