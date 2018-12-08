import CarParkSpec from '/tests/specs/unit/ops/carPark.spec';
import CmdPatternSpec from '/tests/specs/unit/command/cmdPattern.spec';
import CmdTranslatorSpec from '/tests/specs/unit/command/cmdTranslator.spec';
import RobotSpec from '/tests/specs/unit/ops/robot.spec';
import CmdReaderSpec from '/tests/specs/unit/command/cmdReader.spec';

describe('[bus-park unit test]', () => {
  CmdReaderSpec();
  CarParkSpec();
  CmdPatternSpec();
  CmdTranslatorSpec();
  RobotSpec();
});
