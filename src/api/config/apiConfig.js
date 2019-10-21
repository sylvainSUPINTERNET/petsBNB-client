'use strict';


/**
 * API global configuration
 * @type {{protocol: string, port: number, prefix: string, host: string}}
 */
export let apiConfiguration = {
    protocol: "http",
    host: "localhost",
    prefix: "/v1",
    port: 4999,
    jwtSecret: 'n2r5u8xkAmDxGeKaPdSgVkYp3s6v9ysBdEvHrMbQeThWmZq4t7wezZCxFFJANcRf'
};




/**
 * API base URL
 * @type {string}
 */
const apiUrl = `${apiConfiguration.protocol}://${apiConfiguration.host}:${apiConfiguration.port}${apiConfiguration.prefix}`;
export default apiUrl;
