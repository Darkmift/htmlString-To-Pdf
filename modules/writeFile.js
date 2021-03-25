const fs = require('fs').promises;

async function writeFileAsync(filePath, content) {
    try {
        await fs.writeFile(filePath, content);
        return filePath;
    } catch (error) {
        console.log(
            '🚀 ~ file: writeFile.js ~ line 8 ~ writeFileAsync ~ error',
            error
        );
    }
}

module.exports = { writeFileAsync };
