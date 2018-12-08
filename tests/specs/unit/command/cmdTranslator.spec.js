import CmdTranslator from 'src/command/cmdTranslator';
import { CMD_TYPE_SET_POS, CMD_TYPE_UPDATE_POS, CMD_TYPE_END_REPORT } from 'src/consts/constants';

module.exports = () => {
  describe('CmdTranslator class', () => {
    it('should be a correct class with expected method defined', () => {
      expect(typeof CmdTranslator).toEqual('function');
      expect(typeof CmdTranslator.translatePos).toEqual('function');
    });

    it('should return correct result when tanslating PLACE command', () => {
      expect(CmdTranslator.translatePos(null, 'NO_MATCH')).toEqual(null);
      expect(CmdTranslator.translatePos(null, 'PLACE 1,4,SOUTH')).toEqual({
        cmdType: CMD_TYPE_SET_POS,
        pos: {
          posX: 1,
          posY: 4,
          facing: 'SOUTH',
        },
      });

      const currentPos = {
        posX: 2,
        posY: 3,
        facing: 'NORTH',
      };

      expect(CmdTranslator.translatePos(currentPos, 'PLACE 3,1,WEST')).toEqual({
        cmdType: CMD_TYPE_SET_POS,
        pos: {
          posX: 3,
          posY: 1,
          facing: 'WEST',
        },
      });
    });

    it('should return correct result when tanslating MOVE command', () => {
      expect(CmdTranslator.translatePos(null, 'MOVE')).toEqual(null);
      const currentPos = {
        posX: 2,
        posY: 1,
        facing: 'NORTH',
      };

      expect(CmdTranslator.translatePos(currentPos, 'MOVE')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 2,
          facing: 'NORTH',
        },
      });

      currentPos.facing = 'EAST';
      expect(CmdTranslator.translatePos(currentPos, 'MOVE')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 3,
          posY: 1,
          facing: 'EAST',
        },
      });

      currentPos.facing = 'SOUTH';
      expect(CmdTranslator.translatePos(currentPos, 'MOVE')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 0,
          facing: 'SOUTH',
        },
      });

      currentPos.facing = 'WEST';
      expect(CmdTranslator.translatePos(currentPos, 'MOVE')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 1,
          posY: 1,
          facing: 'WEST',
        },
      });
    });

    it('should return correct result when tanslating LEFT command', () => {
      expect(CmdTranslator.translatePos(null, 'LEFT')).toEqual(null);
      const currentPos = {
        posX: 2,
        posY: 1,
        facing: 'NORTH',
      };

      expect(CmdTranslator.translatePos(currentPos, 'LEFT')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'WEST',
        },
      });

      currentPos.facing = 'EAST';
      expect(CmdTranslator.translatePos(currentPos, 'LEFT')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'NORTH',
        },
      });

      currentPos.facing = 'SOUTH';
      expect(CmdTranslator.translatePos(currentPos, 'LEFT')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'EAST',
        },
      });

      currentPos.facing = 'WEST';
      expect(CmdTranslator.translatePos(currentPos, 'LEFT')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'SOUTH',
        },
      });
    });

    it('should return correct result when tanslating RIGHT command', () => {
      expect(CmdTranslator.translatePos(null, 'RIGHT')).toEqual(null);
      const currentPos = {
        posX: 2,
        posY: 1,
        facing: 'NORTH',
      };

      expect(CmdTranslator.translatePos(currentPos, 'RIGHT')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'EAST',
        },
      });

      currentPos.facing = 'EAST';
      expect(CmdTranslator.translatePos(currentPos, 'RIGHT')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'SOUTH',
        },
      });

      currentPos.facing = 'SOUTH';
      expect(CmdTranslator.translatePos(currentPos, 'RIGHT')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'WEST',
        },
      });

      currentPos.facing = 'WEST';
      expect(CmdTranslator.translatePos(currentPos, 'RIGHT')).toEqual({
        cmdType: CMD_TYPE_UPDATE_POS,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'NORTH',
        },
      });
    });

    it('should return correct result when tanslating REPORT command', () => {
      expect(CmdTranslator.translatePos(null, 'REPORT')).toEqual(null);
      const currentPos = {
        posX: 2,
        posY: 1,
        facing: 'NORTH',
      };

      expect(CmdTranslator.translatePos(currentPos, 'REPORT')).toEqual({
        cmdType: CMD_TYPE_END_REPORT,
        pos: {
          posX: 2,
          posY: 1,
          facing: 'NORTH',
        },
      });
    });
  });
};
