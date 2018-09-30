'use strict';

////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////


const { createRandomArray, createRandomArray2D, testFun } = require('./test-tools');
const { mapIntersect, mapMinus } = require('./setFun');

const dateBegin = new Date();

const limit = 10000;
const bufferSize = 1024;

console.log("time now:", dateBegin);
console.log("rows:", limit);
console.log("bytes/row:", bufferSize);

//create random arrays
const [ timeA1, a1 ] = testFun(_ => createRandomArray(limit, bufferSize));
const [ timeA2, a2 ] = testFun(_ => createRandomArray(limit, bufferSize));
console.log("time creating 2 arrays:", timeA1 + timeA2);

//create 2D arrays
const [ timeD1, d1 ] = testFun(_ => createRandomArray2D(a1));
const [ timeD2, d2 ] = testFun(_ => createRandomArray2D(a2));
console.log("time mutating in 2D array by adding hash:", timeD1 + timeD2);

//from array to map
const [ timeM1, map1 ] = testFun(_ => new Map(d1));
const [ timeM2, map2 ] = testFun(_ => new Map(d2));
console.log("time converting 2D arrays in maps:", timeM1 + timeM2);


//minus
const dateStartMap = new Date();
const [ timeMinus1, minus1 ] = testFun(_ => mapMinus(map1, map2));
console.log(`time took for A minus B: ${timeMinus1}, minus size: ${minus1.size}`);

//intersect
const [ timeInt1, mapInt ] = testFun(_ => mapIntersect(map1, map2));
console.log(`time took for A intersect B: ${timeInt1}, minus size: ${mapInt.size}`); 

//total time
const dateEnd = new Date();
console.log("time for set theory ops:", dateEnd.getTime() - dateStartMap.getTime());
console.log("grand total:", dateEnd.getTime() - dateBegin.getTime());