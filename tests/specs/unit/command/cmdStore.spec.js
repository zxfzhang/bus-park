import CmdStore from 'src/command/cmdStore';
import { CMD_NAME_TO_EXIT } from 'src/consts/constants';

module.exports = () => {
  describe('CmdStore class', () => {
    it('should be a correct class with expected method defined', () => {
      expect(typeof CmdStore).toEqual('function');
      expect(typeof CmdStore.prototype.registSubscriber).toEqual('function');
      expect(typeof CmdStore.prototype.removeSubscriber).toEqual('function');
      expect(typeof CmdStore.prototype.listenCmdMsgs).toEqual('function');
      expect(typeof CmdStore.prototype.handleCmdMsg).toEqual('function');
    });

    it('should work correctly to subscribe and unsubscribe an object to command store', () => {
      const listenObj = {
        handleMsg: msg => msg,
      };
      const cmdStore = new CmdStore();
      cmdStore.registSubscriber(listenObj);
      const msgHandlerSpy = spyOn(listenObj, 'handleMsg');
      cmdStore.handleCmdMsg('new command');
      expect(msgHandlerSpy).toHaveBeenCalledWith('new command');

      cmdStore.removeSubscriber(listenObj);
      cmdStore.handleCmdMsg('new command 2');
      expect(msgHandlerSpy).toHaveBeenCalledTimes(1);
    });

    it('should work correctly to read command and invoke subscribers', (done) => {
      function Reader() {
        this.called = false;
        this.readCmdMsg = () => {
          if (!this.called) {
            this.called = true;
            return Promise.resolve('command msg');
          }
          return Promise.resolve(CMD_NAME_TO_EXIT);
        };
      }
      const cmdReader = new Reader();
      const listenObj = {
        handleMsg: msg => msg,
      };
      const cmdStore = new CmdStore(cmdReader);
      cmdStore.registSubscriber(listenObj);
      const msgHandlerSpy = spyOn(listenObj, 'handleMsg');
      cmdStore.listenCmdMsgs().then(() => {
        expect(msgHandlerSpy).toHaveBeenCalledTimes(2);
        done();
      });
    });
  });
};
