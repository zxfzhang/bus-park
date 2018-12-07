import CmdPattern from 'src/command/cmdPattern';
import { CMD_TYPE_SET_POS, CMD_TYPE_UPDATE_POS } from 'src/consts/constants';

module.exports = () => {
  describe('CmdPattern class', () => {
    it('should be a correct class with expected method defined', () => {
      expect(typeof CmdPattern).toEqual('function');
      expect(typeof CmdPattern.prototype.parse).toEqual('function');
    });

    it('should return correct result when parsing a command with parameters', () => {
      const cmdPattern = new CmdPattern('PLACE', CMD_TYPE_SET_POS, /^PLACE\s(\s*([0-9]|[1-9]\d+)\s*,){2}\s*(NORTH|SOUTH|EAST|WEST)\s*$/);
      expect(cmdPattern.parse('PLACE')).toEqual(null);
      expect(cmdPattern.parse('PLACE 1')).toEqual(null);
      expect(cmdPattern.parse('PLACE 1,')).toEqual(null);
      expect(cmdPattern.parse('PLACE 1,2')).toEqual(null);
      expect(cmdPattern.parse('PLACE 1,2,N')).toEqual(null);
      expect(cmdPattern.parse('PLACE 1,2,NORTH,')).toEqual(null);
      expect(cmdPattern.parse('PLACE 1,2,NORTH*')).toEqual(null);

      const expectedRes = {
        name: 'PLACE',
        type: CMD_TYPE_SET_POS,
        data: ['1', '2', 'NORTH'],
      };
      expect(cmdPattern.parse('PLACE 1,2,NORTH')).toEqual(expectedRes);
    });

    it('should return correct result when parsing a command without parameters', () => {
      const cmdPattern = new CmdPattern('MOVE', CMD_TYPE_UPDATE_POS, /^\s*MOVE\s*$/);
      expect(cmdPattern.parse('NOT_MATCH')).toEqual(null);
      expect(cmdPattern.parse('MOVE 1')).toEqual(null);
      expect(cmdPattern.parse('MOVE PARAM')).toEqual(null);
      expect(cmdPattern.parse(' 1 MOVE ')).toEqual(null);
      expect(cmdPattern.parse(' MOVE 1,2,WSET ')).toEqual(null);
      expect(cmdPattern.parse('MOVE 1 3')).toEqual(null);

      const expectedRes = {
        name: 'MOVE',
        type: CMD_TYPE_UPDATE_POS,
        data: undefined,
      };
      expect(cmdPattern.parse('MOVE')).toEqual(expectedRes);
      expect(cmdPattern.parse('   MOVE  ')).toEqual(expectedRes);
    });
  });
};
