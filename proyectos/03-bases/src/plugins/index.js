const { getId } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { http } = require('./http-client.plugin');

module.exports = {
    getId,
    getAge,
    http,
};
