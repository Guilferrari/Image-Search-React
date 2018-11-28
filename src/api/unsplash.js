import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fed607781853242011f42c14b14a8d0bf44bc1ce8bf5c0e7a82882d2bfbac24f'
    }
});