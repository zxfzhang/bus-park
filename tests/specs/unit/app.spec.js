import app from 'src/app';
import { CMD_NAME_TO_EXIT } from 'src/consts/constants';

module.exports = () => {
  describe('App run', () => {
    it('should be a correct object with expected method defined', () => {
      expect(typeof app).toEqual('object');
      expect(typeof app.run).toEqual('function');
      expect(typeof app.welcome).toEqual('function');
    });

    it('should display welcome when calling welcome function', () => {
      const consoleSpy = spyOn(console, 'log');
      app.welcome();
      expect(consoleSpy).toHaveBeenCalled();
    });

    it('should successfully run with command input', (done) => {
      const welcomeSpy = spyOn(app, 'welcome');
      app.run();
      setTimeout(() => {
        process.stdin.push(`${CMD_NAME_TO_EXIT}\r\n`);
        expect(welcomeSpy).toHaveBeenCalled();
        done();
      }, 500);
    });
  });
};
