const RequestFishService = require('../../../lib/services/RequestFishService');

describe('Test suit for clas RequestFishService', () => {
    test('1.- Get all fish', async () => {
        const [success,all_fish] = await RequestFishService.getAllFish();
        
        expect(success).toBe(true);
        console.log(all_fish);

        expect(all_fish).not.toBeUndefined();
        expect(all_fish.length >= 0).toBe(true);
    });
});