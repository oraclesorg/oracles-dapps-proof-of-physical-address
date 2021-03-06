'use strict';

module.exports = (err, addressIndex) => {
    return new Promise((resolve, reject) => {
        if (err) return reject(`error getting address by txBn: ${err}`);
        if (!addressIndex[0]) return reject('address not found by creation block number');
        if (addressIndex[2]) return reject('address already confirmed');
        return resolve(addressIndex);
    });
};
