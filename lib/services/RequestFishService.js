// const fetch = require('fetch');
const request_util = require('../utils/request_util');
const axios = require('axios');
// console.log(request_util)

class RequestFishService{
    static async getAllFish(){
        
        let result  = [];
        let success = false;
        
        // await fetch('https://www.fishwatch.gov/api/species').then(response => {
        //     result = response.data
        // }).catch(()=> {
        //     console.log("Error")
        // });
        // console.log(request_util)
        // await request_util.get('/species').then(response => {
        //     success = true;
        //     result  = response.data;
        // });

        // return [success, result];
        return [true, await axios.get('https://www.fishwatch.gov/api/species', {    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin":"*", 
        "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
        "Accept":"*/*",
        "Accept-Encoding":"gzip, deflate, br",
        "Connection":"keep-alive",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 OPR/86.0.4363.59"
    }})
            .then(function (response) {
                console.log(response)
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        ]
    }
}


module.exports = RequestFishService;