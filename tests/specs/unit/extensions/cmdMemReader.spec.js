import CmdMemReader from 'src/extensions/cmdMemReader';

module.exports = () => {
  describe('CmdMemReader class', () => {
    it('should be a correct class with expected method defined', () => {
      expect(typeof CmdMemReader).toEqual('function');
      expect(typeof CmdMemReader.prototype.readCmdMsg).toEqual('function');
    });

    it('should return correct result when reading command array', (done) => {
      const cmdMemReader = new CmdMemReader(['PLACE']);
      cmdMemReader.readCmdMsg().then((result) => {
        expect(result).toEqual('PLACE');
        done();
      });
    });
  });
};
