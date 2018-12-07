import path from 'path';
import Jasmine from 'jasmine';
import reporters from 'jasmine-reporters';

(() => {
  const junitReporter = new reporters.JUnitXmlReporter({
    savePath: path.resolve(__dirname, 'reports/unit/'),
    consolidateAll: false,
  });

  const jrunner = new Jasmine();
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;
  jrunner.configureDefaultReporter({
    showColors: true,
  });

  jrunner.addReporter(junitReporter);
  jrunner.loadConfig({
    spec_dir: './tests',
    spec_files: ['unit.specs.js'],
    stopSpecOnExpectationFailure: false,
    random: false,
  });

  jrunner.execute();
})();
