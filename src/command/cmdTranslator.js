import CmdPattern from 'src/command/cmdPattern';
import { CMD_TYPE_SET_POS, CMD_TYPE_UPDATE_POS, CMD_TYPE_END_REPORT } from 'src/consts/constants';

export default class CmdTranslator {
  static translatePos(currentPos, cmdMsg) {
    const cmdPatternArry = [
      new CmdPattern('PLACE', CMD_TYPE_SET_POS, /^PLACE\s(\s*([0-9]|[1-9]\d+)\s*,){2}\s*(NORTH|SOUTH|EAST|WEST)\s*$/),
      new CmdPattern('MOVE', CMD_TYPE_UPDATE_POS, /^\s*MOVE\s*$/),
      new CmdPattern('LEFT', CMD_TYPE_UPDATE_POS, /^\s*LEFT\s*$/),
      new CmdPattern('RIGHT', CMD_TYPE_UPDATE_POS, /^\s*RIGHT\s*$/),
      new CmdPattern('REPORT', CMD_TYPE_END_REPORT, /^\s*REPORT\s*$/),
    ];

    for (let i = 0; i < cmdPatternArry.length; i += 1) {
      const cmdPattern = cmdPatternArry[i];
      const command = cmdPattern.parse(cmdMsg.toUpperCase());
      if (command !== null) {
        if (currentPos == null && command.name !== 'PLACE') return null;
        let facing = currentPos ? currentPos.facing : null;
        let posX = currentPos ? currentPos.posX : null;
        let posY = currentPos ? currentPos.posY : null;
        switch (command.name) {
          case 'PLACE':
            return {
              cmdType: command.type,
              pos: {
                posX: parseInt(command.data[0].trim(), 10),
                posY: parseInt(command.data[1].trim(), 10),
                facing: command.data[2].trim(),
              },
            };
          case 'MOVE':
            if (facing === 'NORTH') {
              posY += 1;
            } else if (facing === 'EAST') {
              posX += 1;
            } else if (facing === 'SOUTH') {
              posY -= 1;
            } else {
              posX -= 1;
            }
            return {
              cmdType: command.type,
              pos: {
                posX,
                posY,
                facing,
              },
            };
          case 'LEFT':
            if (facing === 'NORTH') {
              facing = 'WEST';
            } else if (facing === 'EAST') {
              facing = 'NORTH';
            } else if (facing === 'SOUTH') {
              facing = 'EAST';
            } else {
              facing = 'SOUTH';
            }
            return {
              cmdType: command.type,
              pos: {
                posX,
                posY,
                facing,
              },
            };
          case 'RIGHT':
            if (facing === 'NORTH') {
              facing = 'EAST';
            } else if (facing === 'EAST') {
              facing = 'SOUTH';
            } else if (facing === 'SOUTH') {
              facing = 'WEST';
            } else {
              facing = 'NORTH';
            }
            return {
              cmdType: command.type,
              pos: {
                posX,
                posY,
                facing,
              },
            };
          default:
            return {
              cmdType: command.type,
              pos: {
                posX,
                posY,
                facing,
              },
            };
        }
      }
    }
    return null;
  }
}
