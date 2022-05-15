const Reader = require('../../../lib/utils/Reader');

describe('Test Suite for Reader', ()=>{
    test('1.- Method readJsonFile path = undefined, null and not string', ()=>{

        let [success,data_fish] = Reader.readJsonFile();

        expect(success).toBe(false);
        expect(data_fish).toBe('Ruta invalida');

        [success,data_fish] = Reader.readJsonFile(null);

        expect(success).toBe(false);
        expect(data_fish).toBe('Ruta invalida');

        [success,data_fish] = Reader.readJsonFile(2);
        expect(success).toBe(false);
        expect(data_fish).toBe('Ruta invalida');        
    });

    test('2.- Method readJsonFile path invalid', ()=>{
        let [success, data_fish] = Reader.readJsonFile(`/tmp/${new Date().valueOf()}`);

        expect(success).toBe(false);
        expect(data_fish).toBe('Ruta no encontrada');
    });

    test('3.- Method readJsonFile path is not file', ()=>{
        let [success, data_fish] = Reader.readJsonFile('/tmp/');

        expect(success).toBe(false);
        expect(data_fish).toBe('Ruta no es archivo'); 

    });

    test('4.- Method readJsonFile load file fish', ()=>{
        let [success, data_fish] = Reader.readJsonFile('fish_data.json');
        
        expect(success).toBe(true);
        expect(data_fish).not.toBeUndefined();
    });

});