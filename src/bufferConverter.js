
export default class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
      }
      
    load(buffer) {
        if (!(buffer instanceof ArrayBuffer)) throw new Error('Invalid buffer');
        
        this.buffer = buffer;
      }
      
      
    toString() {
        if (!this.buffer) throw new Error('No load buffer');
        
        let result = '';
        const view = new Uint16Array(this.buffer);
        
        for (let i = 0; i < view.length; i++) {
          result += String.fromCharCode(view[i]);
        }
        
        return result;
      }

}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
// console.log(getBuffer())

