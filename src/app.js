import CmdReader from 'src/command/cmdReader';
import CmdStore from 'src/command/cmdStore';
import Robot from 'src/ops/robot';
import CarPark from 'src/ops/carPark';
import { APP_NAME, CARPARK_X_LEN, CARPARK_Y_LEN } from 'src/consts/constants';

class App {
  constructor(name) {
    this.appName = name;
  }

  welcome() {
    console.log(`Welcome to ${this.appName}`); // eslint-disable-line no-console
  }

  run(inputReader) {
    this.welcome();
    const carPark = new CarPark(CARPARK_X_LEN, CARPARK_Y_LEN);
    const cmdStore = new CmdStore(inputReader || new CmdReader());
    const robot = new Robot(carPark);

    cmdStore.registSubscriber(robot);
    cmdStore.listenCmdMsgs().then(() => {});
  }
}
export default new App(APP_NAME);
