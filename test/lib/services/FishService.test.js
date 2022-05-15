const FishService = require('../../../lib/services/FishService');

describe('Suit Test for class FishService', () => {
    test('1.- Load all fish', () => {
        const result = FishService.getAllFish()
        expect(result).not.toBeUndefined();
        expect(result.length >= 0).toBe(true);
    })

    test('2.- Get all names fish', () => {
        const all_fish = [{"Scientific Name":"Urophycis tenuis"}, {"Scientific Name":"Scomber colias"}]

        const result = FishService.getFishNames(all_fish)
        expect(result).toContain('Urophycis tenuis');
        expect(result).toContain('Scomber colias');
    })
});