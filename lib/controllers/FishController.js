const FishService = require('../services/FishService');

class FishController{
    static getAllFish(){
        const all_fish = FishService.getAllFish();
        return all_fish.slice(0,3).map(FishService.formatFish).join('\n\n')
    }

    static getFishByName(name){
        const fish = FishService.getFishByName(name);
        if(Object.keys(fish).length === 0){
            return 'Pez no encontrado';
        }
        return FishService.formatFish(fish)
    }

    static getAllFishNames(){
        const all_fish = FishService.getAllFish();
        return `* ${FishService.getFishNames(all_fish).join('\n* ')}`
    }
}

module.exports = FishController;