export default class Validator {
    validateUsername(nickname){
        const regex = (/^(?!(.*?\d){4})(?!^[_\d-].*)(?!.*[_-\d]$)[A-Za-z][A-Za-z0-9_-]*[A-Za-z]$/);
            return regex.test(nickname);
    }

}
// const testV = new Validator();
// console.log(testV.validateUsername('1_ldl'));

// const testV2 = new Validator();
// console.log(testV2.validateUsername('hoe_mk-123l'));