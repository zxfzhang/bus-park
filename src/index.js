import app from 'src/app';

// *COMMENT* below line if you want to play with the App with sending commands via an array
app.run();

// *UNCOMMENT* below part to play with the App with sending commands via an array
/*
import CmdMemReader from 'src/extensions/cmdMemReader';
app.run(
  new CmdMemReader(['PLACE 1,2,NORTH', 'MOVE', 'MOVE', 'REPORT', 'LEFT', 'MOVE', 'REPORT']),
);
*/
