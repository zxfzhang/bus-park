# Welcome to Bus in Carpark Simulator

This is a demo project for simulating bus movement within a carpark by a robot. See [the design doc](documents/design.md). 

## Get started

1. Clone the project from Git Repository
2. Make sure you have Node installed
3. Open a command window and switch to the root folder of the project
4. Run `npm install` in the command line
5. If everything goes well, run `npm run start`
6. You will see a welcome message and a prompt for command input
7. Try commands like 'PLACE 1,2,NORTH', 'MOVE' and 'REPORT' to play with it
8. Enter 'exit' to quite the command line

## Another way to input the command

By default, the App will run with reading command from the command line, but it also provides another way to read commands from an Array.
1. You need an editor to open the src/index.js file
2. Comment out the line `app.run();`
3. Uncomment the part below the line
4. Save the change, and run `npm run start`. The App will read commands in the Array provided in the code and display the result for the commands
5. Change the data in the Array to any commands you want to try, save the change, and run `npm run start` to display the result

## Code style check

This project uses ESLint to keep the coding style well organized, run below command to start the check:

  `npm run check-lint`

## Unit tests

This project also includes Unit Tests, run below command to start the test:

  `npm run test`
