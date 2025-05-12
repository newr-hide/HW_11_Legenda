import ArrayBufferConverter, {getBuffer} from "../bufferConverter.js";


describe('ArrayBufferConverter', () => {
    it('convert a string correctly', () => {
     
      const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
      const buffer = getBuffer(data);
      const converter = new ArrayBufferConverter();
      converter.load(buffer);
      const convertedData = converter.toString();
      expect(convertedData).toEqual(data);
    });
  
    it('error loading non object', () => {
      const converter = new ArrayBufferConverter();
      expect(() => converter.load({})).toThrowError('Invalid buffer');
    });
  
    it('throws error toString loaded buffer', () => {
      const converter = new ArrayBufferConverter();
      expect(() => converter.toString()).toThrowError('No load buffer');
    });
  });