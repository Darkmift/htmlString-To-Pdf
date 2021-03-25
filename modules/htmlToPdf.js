const puppeteer = require('puppeteer');
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

async function htmlToPdf(htmlPath) {
    const browser = await puppeteer.launch({ ignoreHTTPSErrors: true });
    const page = await browser.newPage();
    await page.goto(htmlPath, { waitUntil: 'networkidle2' });
    const outputFile = 'data/' + Date.now() + 'invoice.pdf';
    await page.pdf({
        path: outputFile,
        format: 'a4',
        printBackground: true,
    });
    await browser.close();
    console.log('Done');
    return outputFile;
}

module.exports = { htmlToPdf };
