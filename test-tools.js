'use strict';

const crypto = require('crypto');
const { hash256, hash1 } = require('./hash');
const range = require('rangex');

const createRandomArray2D = list  => {
    const list2D = [];
    for(const elem of list)
    {
        list2D.push([hash1(elem), elem]);
    }
    return list2D;
}

const createRandomArray = (limit, bufferSize)  => {
    const list = [];
    for(const num of range(limit))
    {
        const randomBuffer = crypto.randomBytes(bufferSize);
        list.push(randomBuffer);
    }
    return list;
}

const testFun = fn => {
    try {
        const startEnd = new Date();
        const res = fn();
        const endTime = new Date();
        const netTime = endTime.getTime() - startEnd.getTime();
        return [ netTime, res ];
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    createRandomArray,
    createRandomArray2D,
    testFun
}