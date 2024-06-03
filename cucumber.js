// cucumber.js
console.log('Loading cucumber.js configuration')
module.exports = {
  default: {
    require: [
      'stepdefinitions/*.js',
    ],
    format: [
      '@cucumber/pretty-formatter',
      'json:reports/cucumber_report.json'
    ]
  }
}