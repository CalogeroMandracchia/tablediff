'use strict';

const fs = require('fs');
const crypto = require('crypto');
const { hash256, hash1 } = require('./hash');
const range = require('rangex');

const dateBegin = new Date();

const limit = 100000;
const bufferSize = 8192; // 2048 4096 8192

console.log("time now:", dateBegin);
console.log("rows:", limit);
console.log("bytes/row:", bufferSize);

for(const num of range(limit))
{
    const randomBuffer = crypto.randomBytes(bufferSize);
    fs.appendFile('message.txt', randomBuffer, err => { if (err) throw err; })
}
