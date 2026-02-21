import axios from 'axios';

const api = axios.create({

    baseURL: 'https://project-backend-txga.onrender.com/api',

});

export default api;


// http://localhost:5000/api