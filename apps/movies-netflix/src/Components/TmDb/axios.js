import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// exporting an instance { instance.get(url) will return data in json as in postman}
export default instance