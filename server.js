const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const tempalteBuilder = require('./modules/templateBuilder');
const { htmlToPdf } = require('./modules/htmlToPdf');
const { writeFileAsync } = require('./modules/writeFile');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/data', express.static(path.join(__dirname, 'data')));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        const html = tempalteBuilder(
            {
                name: 'name',
                name1: 'name1',
                price1: 'price1',
                price11: 'price11',
                receiptId: 'receiptId',
                count: 'count',
                count1: 'count1',
                desc: 'description',
                desc1: 'description',
                tohwo: 'tohwo',
                aram: 'aram',
                payby: 'payby',
            },
            fullUrl
        );
        const path = 'data/invoice.html';
        await writeFileAsync(path, html);

        const pdfPath = await htmlToPdf(fullUrl + path);
        const outputPath = __dirname + '/' + pdfPath;
        res.sendFile(outputPath);
    } catch (error) {
        console.log('🚀 ~ file: server.js ~ line 23 ~ app.get ~ error', error);
        res.send('error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
