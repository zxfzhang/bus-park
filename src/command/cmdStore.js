import { CMD_NAME_TO_EXIT } from 'src/consts/constants';

export default class CmdStore {
  constructor(cmdReader) {
    this.cmdSubscribers = new Set();
    this.cmdReader = cmdReader;
  }

  registSubscriber(subscriber) {
    this.cmdSubscribers.add(subscriber);
  }

  removeSubscriber(subscriber) {
    this.cmdSubscribers.delete(subscriber);
  }

  /* eslint-disable no-await-in-loop */
  async listenCmdMsgs() {
    let cmdMsg;
    do {
      cmdMsg = await this.cmdReader.readCmdMsg();
      this.handleCmdMsg(cmdMsg);
    } while (cmdMsg !== CMD_NAME_TO_EXIT);
  }

  handleCmdMsg(cmdMsg) {
    this.cmdSubscribers.forEach((subscriber) => {
      subscriber.handleMsg(cmdMsg);
    });
  }
}
