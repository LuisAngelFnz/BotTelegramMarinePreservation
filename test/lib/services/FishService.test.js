const FishService = require('../../../lib/services/FishService');

describe('Suit Test for class FishService', () => {
    test('1.- Load all fish', () => {
        const result = FishService.getAllFish()
        expect(result).not.toBeUndefined();
        expect(result.length >= 0).toBe(true);
    });

    test('2.- Get all names fish', () => {
        const all_fish = [{"Scientific Name":"Urophycis tenuis"}, {"Scientific Name":"Scomber colias"}]

        const result = FishService.getFishNames(all_fish)
        expect(result).toContain('Urophycis tenuis');
        expect(result).toContain('Scomber colias');
    });

    test('3.- Get fish by name', () => {
        const all_fish = FishService.getAllFish('./test/lib/services/DataFishServiceTest/test_fish.json');

        const result = FishService.getFishByName('Urophycis tenuis',all_fish);

        expect(result).not.toBeUndefined();
        expect(result['Scientific Name']).toBe('Urophycis tenuis');
    });
});