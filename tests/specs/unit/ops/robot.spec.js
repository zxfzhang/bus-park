import Robot from 'src/ops/robot';
import CarPark from 'src/ops/carPark';

module.exports = () => {
  describe('Robot class', () => {
    it('should be a correct class with expected method defined', () => {
      expect(typeof Robot).toEqual('function');
      expect(typeof Robot.prototype.getCarPark).toEqual('function');
      expect(typeof Robot.prototype.handleMsg).toEqual('function');
    });

    it('should return correct carPark obj after initialized', () => {
      const carPark = new CarPark(5, 5);
      const robot = new Robot(carPark);
      expect(robot.getCarPark()).toEqual(carPark);
    });

    it('should handle command correctly', () => {
      const carPark = new CarPark(5, 5);
      const robot = new Robot(carPark);

      robot.handleMsg('NO_MATCH');
      expect(carPark.getCurrentBusPos()).toEqual(null);

      robot.handleMsg('MOVE');
      expect(carPark.getCurrentBusPos()).toEqual(null);

      robot.handleMsg('PLACE 1,3,EAST');
      expect(carPark.getCurrentBusPos()).toEqual({
        posX: 1,
        posY: 3,
        facing: 'EAST',
      });

      robot.handleMsg('MOVE');
      expect(carPark.getCurrentBusPos()).toEqual({
        posX: 2,
        posY: 3,
        facing: 'EAST',
      });

      robot.handleMsg('LEFT');
      expect(carPark.getCurrentBusPos()).toEqual({
        posX: 2,
        posY: 3,
        facing: 'NORTH',
      });

      robot.handleMsg('MOVE');
      expect(carPark.getCurrentBusPos()).toEqual({
        posX: 2,
        posY: 4,
        facing: 'NORTH',
      });

      robot.handleMsg('RIGHT');
      expect(carPark.getCurrentBusPos()).toEqual({
        posX: 2,
        posY: 4,
        facing: 'EAST',
      });

      const consoleSpy = spyOn(console, 'log');
      robot.handleMsg('REPORT');
      expect(consoleSpy).toHaveBeenCalled();
      expect(carPark.getCurrentBusPos()).toEqual({
        posX: 2,
        posY: 4,
        facing: 'EAST',
      });
    });
  });
};
