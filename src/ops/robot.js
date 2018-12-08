import CmdTranslator from 'src/command/cmdTranslator';
import { CMD_TYPE_END_REPORT } from 'src/consts/constants';

export default class Robot {
  constructor(carPark) {
    this.carPark = carPark;
  }

  getCarPark() {
    return this.carPark;
  }

  handleMsg(cmdMsg) {
    const currentPos = this.getCarPark().getCurrentBusPos();
    const newPosCmd = CmdTranslator.translatePos(currentPos, cmdMsg);

    if (newPosCmd !== null) {
      this.getCarPark().moveBusToPos(newPosCmd.pos);
      if (newPosCmd.cmdType === CMD_TYPE_END_REPORT) this.getCarPark().reportPosition();
    }
  }
}
