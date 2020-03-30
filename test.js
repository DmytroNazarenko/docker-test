let webdriver = require('selenium-webdriver');
let Options = require('selenium-webdriver/chrome').Options;

let chrome = require('chromedriver');

async function main(){
    chromeCapabilities = webdriver.Capabilities.chrome();
    let chromeOptions = {
        'args': ['--test-type', '--start-maximized', '--no-sandbox']
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);
    driver = new webdriver.Builder()
                .withCapabilities(chromeCapabilities)
                .build();
    console.log('Run');
    driver.quit();
}

main()