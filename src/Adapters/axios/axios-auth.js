import axios from 'axios';

const auth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:'
});

export default auth;
