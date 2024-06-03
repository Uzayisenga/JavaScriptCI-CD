// index.js
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const runTests = () => {
  exec('npx cucumber-js features/upload.feature --format json:reports/cucumber_report.json', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    // Check if the JSON report was generated and generate the HTML report
    const reportPath = path.join(__dirname, 'reports/cucumber_report.json');
    if (fs.existsSync(reportPath)) {
      require('./generate-report');
    } else {
      console.error('Cucumber JSON report not found!');
    }
  });
};

runTests();
