'use strict';

/**
 * this file working kinda as proxy
 * We avoid to call directly the real API endpoint from the application and using this endpoint instead
 */

import axios from "axios";

import apiUrl from "../config/apiConfig";

// TODO

/**
 * AuthenticationRegister proxy endpoint
 * @param username
 * @param email
 * @param password
 * @returns {Promise<void>}
 * @constructor
 */
let AuthenticationRegister = async (username, email, password) => {
    return await axios.post(
        `${apiUrl}/auth/register`,
        {
            username: username,
            email: email,
            password: password
        }
    );
};

let AuthenticationLogin = async (email, password) => {
    return await axios.post(
        `${apiUrl}/auth/login`,
        {
            email :email,
            password: password
        }
    )
};


let ApiAuthentication = {
    register: AuthenticationRegister,
    login: AuthenticationLogin

};

export default ApiAuthentication;