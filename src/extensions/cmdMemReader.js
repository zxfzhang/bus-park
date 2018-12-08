import { CMD_NAME_TO_EXIT } from 'src/consts/constants';

export default class CmdMemReader {
  constructor(cmdArry) {
    this.cmdArry = cmdArry || [];
  }

  readCmdMsg() {
    return Promise.resolve(
      this.cmdArry.length > 0 ? this.cmdArry.shift() : CMD_NAME_TO_EXIT,
    );
  }
}
