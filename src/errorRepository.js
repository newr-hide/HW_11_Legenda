
export default class ErrorRepository {
    static errors = new Map();
    constructor() {}
    addErrors(error, description) {
        if (!this.constructor.errors.has(error)) {
            this.constructor.errors.set(error, description);
        }
    }
   
    translate(code) {
        return this.constructor.errors.get(code) || 'Unknown error';
    }
}
