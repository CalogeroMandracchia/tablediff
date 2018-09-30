'use strict';

const mapIntersect = (map1, map2) => {
    const mapRes = new Map();
    for (const [key, value] of map1.entries()) {
        if(map2.has(key)) {
            mapRes.set(key, value);
        }
    }
    return mapRes;
}

const mapMinus = (map1, map2) => {
    const mapRes = new Map();
    for (const [key, value] of map1.entries()) {
        if(!map2.has(key)) {
            mapRes.set(key, value);
        }
    }
    return mapRes;
}

module.exports = {
    mapIntersect,
    mapMinus
}