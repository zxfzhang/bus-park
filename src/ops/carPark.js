
export default class CarPark {
  constructor(xLen, yLen) {
    this.xLen = xLen;
    this.yLen = yLen;
    this.currentBusPos = null;
  }

  getCurrentBusPos() {
    return this.currentBusPos;
  }

  moveBusToPos(pos) {
    if (pos.posX < 0 || pos.posX >= this.xLen) return false;
    if (pos.posY < 0 || pos.posY >= this.yLen) return false;
    this.currentBusPos = pos;
    return true;
  }

  reportPosition() {
    const cbp = this.getCurrentBusPos();
    if (cbp !== null) {
      console.log('%d,%d,%s', cbp.posX, cbp.posY, cbp.facing); // eslint-disable-line no-console
    }
  }
}
