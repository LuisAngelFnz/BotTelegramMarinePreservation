const Reader = require('../utils/Reader');

class FishService {
    static getAllFish(path){
        
        if(! path) path = 'fish_data.json'
        
        const [success, all_fish] = Reader.readJsonFile(path)
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

    static filterFishByName(all_fish, name){

        return all_fish.filter((each_fish) => {
            return each_fish['Scientific Name'].trim().toLowerCase() == name
        })
    }

    static getFishByName(name, all_fish){
        if (! all_fish) all_fish = this.getAllFish();

        const filter_list = this.filterFishByName(all_fish, name);

        if(filter_list.length > 0) {
            return filter_list[0]
        }

        return {}
    }

    static formatFish(dict_fish){
        return [
            `NOMBRE    : * ${dict_fish['Scientific Name'] || ''} *`,
            `UBICACIÓN : ${dict_fish['Location'] || ''}`,
            `POBLACIÓN : ${dict_fish['Population'] || ''}`,
            `SALUD     : ${dict_fish['Animal Health'] || 'N/A'}`,
            `TEMPORADA : ${dict_fish['Availability'] || 'N/A'}`,
            `PESO      : ${dict_fish['Fat, Total'] || 'N/A'}`,
            `HÁBITAT   : ${dict_fish['Habitat'] || 'N/A'}`,
        ].map((str) => str.trim().replace(/\n/g, '')).join('\n').replace(/<.*?>/g,'');
    }
}

module.exports = FishService;