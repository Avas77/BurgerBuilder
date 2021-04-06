import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-32682.firebaseio.com/'
});

export default instance;