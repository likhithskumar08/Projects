const fs = require('fs');
// console.log(fs);
const node = process.argv[2] || 'project'

try {
    fs.mkdirSync(node);
    fs.writeFileSync(`${node}/index.html`, " ")
    fs.writeFileSync(`${node}/style.css`, " ")
    fs.writeFileSync(`${node}/script.js`, " ")
} catch (e) {
    console.log('error');
    console.log(e);
}

// const math = require('./math');
// console.log(math);
