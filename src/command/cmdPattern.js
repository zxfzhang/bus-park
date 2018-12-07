import { CMD_PARAM_PATTERN, CMD_PARAM_SPLIT } from 'src/consts/constants';

export default class CmdPattern {
  constructor(name, type, pattern) {
    this.name = name;
    this.type = type;
    this.pattern = pattern;
  }

  parse(cmdMsg) {
    if (this.pattern.test(cmdMsg)) {
      let data;
      if (CMD_PARAM_PATTERN.test(cmdMsg)) {
        data = CMD_PARAM_PATTERN.exec(cmdMsg)[0].trim().split(CMD_PARAM_SPLIT);
      }

      return {
        name: this.name,
        type: this.type,
        data,
      };
    }
    return null;
  }
}
