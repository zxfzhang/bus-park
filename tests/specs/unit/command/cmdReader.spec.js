import CmdReader from 'src/command/cmdReader';

module.exports = () => {
  describe('CmdReader class', () => {
    it('should be a correct class with expected method defined', () => {
      expect(typeof CmdReader).toEqual('function');
      expect(typeof CmdReader.prototype.readCmdMsg).toEqual('function');
    });

    it('should return correct result when reading a command', (done) => {
      const cmdReader = new CmdReader();
      cmdReader.readCmdMsg().then((result) => {
        expect(result).toEqual('PLACE');
        done();
      });
      process.stdin.push('PLACE\r\n');
    });
  });
};
