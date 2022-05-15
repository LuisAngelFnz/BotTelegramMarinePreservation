const FishController = require('../../../lib/controllers/FishController');

describe('Suit test for class FishController', () => {
    test('1.- Get all fish', () => {
        const result = FishController.getAllFish();
        console.log(result);
        expect(result).not.toBeUndefined();
    });
});