const axios = require('axios');

module.exports = axios.create({
    baseURL: "https://www.fishwatch.gov/api",
    mode: 'cors',
    withCredentials: true,
    credentials: 'same-origin',
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin":"*", 
        "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
        "Accept":"*/*",
        "Accept-Encoding":"gzip, deflate, br",
        "Connection":"keep-alive",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 OPR/86.0.4363.59"
    }
});
