import Validator from "../validator.js";

describe('class Validator', () => {
    describe('validate', () => {
        test('nickname correct parameters', () => {
            const nickname = new Validator();
            const result = nickname.validateUsername('Hose_1-win');

            const nickname2 = new Validator();
            const result2 = nickname2.validateUsername('1jdkd_f-f');

            const nickname3 = new Validator();
            const result3 = nickname3.validateUsername('Hh1112_f-f');

            const nickname4 = new Validator();
            const result4 = nickname4.validateUsername('-fhgj');

            const nickname5 = new Validator();
            const result5 = nickname5.validateUsername('5vbv_bnb');
            expect(result).toBe(true);
            expect(result2).toBe(false);
            expect(result3).toBe(false);
            expect(result4).toBe(false);
            expect(result5).toBe(false);
        });
    });
});