const Reader = require('../utils/Reader');

class FishService {
    static getAllFish(){
        const [success, all_fish] = Reader.readJsonFile('fish_data.json')
        if(success){
            return all_fish;
        }else{
            return [];
        }
    }

    static getFishNames(all_fish){
        return all_fish.map((each_fish) => {
            return each_fish['Scientific Name'];
        });
    }
}

module.exports = FishService;