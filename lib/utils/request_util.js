const axios = require('axios');
module.exports = axios.create({
    baseURL: "https://www.fishwatch.gov/api/",
    headers: {
        "Content-type": "application/json"
    }
});