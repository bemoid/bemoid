const data = require('../package.json');

const banner = `/*!
* Bemoid v${data.version} (${data.homepage})
* ${data.description}
*
* Licensed under the ${data.license} license.
* Copyright 2017-present ${data.author}.
*/\n`;

process.stdout.write(banner);
process.stdin.pipe(process.stdout);