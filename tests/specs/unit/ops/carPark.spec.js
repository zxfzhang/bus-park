import CarPark from 'src/ops/carPark';

module.exports = () => {
  describe('CarPark class', () => {
    afterEach(() => {

    });

    it('should be a correct class with expected method defined', () => {
      expect(typeof CarPark).toEqual('function');
      expect(typeof CarPark.prototype.getCurrentBusPos).toEqual('function');
      expect(typeof CarPark.prototype.MoveBusToPos).toEqual('function');
    });

    it('should return null for current bus position when initialized', () => {
      const carPark = new CarPark(5, 5);
      expect(carPark.getCurrentBusPos()).toEqual(null);
    });

    it('should handle bus movement correctly', () => {
      const carPark = new CarPark(5, 5);
      const posLegal1 = {
        posX: 3,
        posY: 2,
        facing: 'NOTRH',
      };
      expect(carPark.MoveBusToPos(posLegal1)).toEqual(true);
      expect(carPark.getCurrentBusPos()).toEqual(posLegal1);

      const posLegal2 = {
        posX: 4,
        posY: 4,
        facing: 'WEST',
      };
      expect(carPark.MoveBusToPos(posLegal2)).toEqual(true);
      expect(carPark.getCurrentBusPos()).toEqual(posLegal2);

      const currentPos = carPark.getCurrentBusPos();
      const posIllegal1 = {
        posX: -1,
        posY: 2,
        facing: 'NOTRH',
      };
      expect(carPark.MoveBusToPos(posIllegal1)).toEqual(false);
      expect(carPark.getCurrentBusPos()).toEqual(currentPos);

      const posIllegal2 = {
        posX: 4,
        posY: -4,
        facing: 'WEST',
      };
      expect(carPark.MoveBusToPos(posIllegal2)).toEqual(false);
      expect(carPark.getCurrentBusPos()).toEqual(currentPos);

      const posIllegal3 = {
        posX: 6,
        posY: 2,
        facing: 'SOUTH',
      };
      expect(carPark.MoveBusToPos(posIllegal3)).toEqual(false);
      expect(carPark.getCurrentBusPos()).toEqual(currentPos);

      const posIllegal4 = {
        posX: 4,
        posY: 8,
        facing: 'EAST',
      };
      expect(carPark.MoveBusToPos(posIllegal4)).toEqual(false);
      expect(carPark.getCurrentBusPos()).toEqual(currentPos);
    });
  });
};
