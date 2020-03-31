let webdriver = require('selenium-webdriver');
let Options = require('selenium-webdriver/chrome').Options;
require('chromedriver')

async function main(){
    chromeCapabilities = webdriver.Capabilities.chrome();
    let chromeOptions = {
        'args': ['--test-type', '--start-maximized', '--no-sandbox']
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);
    driver =  new webdriver.Builder()
                .withCapabilities(chromeCapabilities)
                .build();
    console.log('Run');
    await driver.get('http://google.com');
    await driver.quit();
}

main()