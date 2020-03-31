let webdriver = require('selenium-webdriver');
let Options = require('selenium-webdriver/chrome').Options;
require('chromedriver')

async function main(){
    chromeCapabilities = webdriver.Capabilities.chrome();
    let chromeOptions = {
        'args': ['--no-sandbox', '--headless', "--disable-gpu"]
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);
    driver = await new webdriver.Builder()
                .withCapabilities(chromeCapabilities)
                .build();
    console.log('Run');
    driver.quit();
}

main()