import CarParkSpec from '/tests/specs/unit/ops/carPark.spec';
import CmdPatternSpec from '/tests/specs/unit/command/cmdPattern.spec';
import CmdTranslatorSpec from '/tests/specs/unit/command/cmdTranslator.spec';
import RobotSpec from '/tests/specs/unit/ops/robot.spec';

describe('[bus-park unit test]', () => {
  CarParkSpec();
  CmdPatternSpec();
  CmdTranslatorSpec();
  RobotSpec();
});
