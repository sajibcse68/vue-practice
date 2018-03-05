module.exports = {
  'stocks/stocks tests': function (browser) {
    // const devServer = browser.globals.devServerURL;

    browser
      .url('http://localhost:8080/stocks/stocks?TESTING=true');

    browser.window_handles((resp) => {
      const handle = resp.value[0];
      browser.switchWindow(handle);
    });

    browser
      .waitForElementVisible('#funds', 10000)
      .verify.elementPresent('#funds')
      .assert.containsText('h3 small', '(Price: 6)')
      .saveScreenshot('/Users/sajib/Desktop/s2.png')
      .screenshot();

    browser
      .pause(7000)
      .end();
  }
};
