'use strict';


/**
 * API global configuration
 * @type {{protocol: string, port: number, prefix: string, host: string}}
 */
let apiConfiguration = {
    protocol: "http",
    host: "localhost",
    prefix: "/v1",
    port: 4999
};


/**
 * API base URL
 * @type {string}
 */
const apiUrl = `${apiConfiguration.protocol}://${apiConfiguration.host}:${apiConfiguration.port}${apiConfiguration.prefix}`;
export default apiUrl;