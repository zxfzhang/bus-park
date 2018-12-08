import readline from 'readline';

export default class CmdReader {
  constructor(tips) {
    this.tips = tips || '>';
  }

  readCmdMsg() {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(this.tips, (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    });
  }
}
