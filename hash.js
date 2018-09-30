'use strict';

const crypto = require('crypto');

const hash256 = data => {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}

const hash1 = data => {
    const hash = crypto.createHash('sha1');
    hash.update(data);
    return hash.digest('hex');
}

module.exports = {
    hash256,
    hash1
}