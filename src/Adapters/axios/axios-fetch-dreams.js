import axios from 'axios';

const fetchDreams = axios.create({
    baseURL: 'https://react-dreamstracker-default-rtdb.firebaseio.com/'
});

export default fetchDreams;
