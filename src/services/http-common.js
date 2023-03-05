import axios from "axios";
const http=axios.create({
    baseURL: 'http://localhost:5566',
    headers:{"content-type":"application/json"}


})

export default http