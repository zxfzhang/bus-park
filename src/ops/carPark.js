
export default class CarPark {
  constructor(xLen, yLen) {
    this.xLen = xLen;
    this.yLen = yLen;
    this.currentBusPos = null;
  }

  getCurrentBusPos() {
    return this.currentBusPos;
  }

  MoveBusToPos(pos) {
    if (pos.posX < 0 || pos.posX >= this.xLen) return false;
    if (pos.posY < 0 || pos.posY >= this.yLen) return false;
    this.currentBusPos = pos;
    return true;
  }
}
