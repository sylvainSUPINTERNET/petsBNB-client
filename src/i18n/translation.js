'use strict';


const translation = {
    FR: {
        // Authentication
        AUTHENTICATION_ALREADY_ACCOUNT_SWITCH_1 : "Déjà un compte ? se connecter",
        AUTHENTICATION_ALREADY_ACCOUNT_SWITCH_2 : "Pas de compte ? s'enregister",

        // Authentication Form
        AUTHENTICATION_FORM_LABEL_REGISTER_USERNAME : "Nom d'utilisateur",
        AUTHENTICATION_FORM_LABEL_REGISTER_EMAIL : "Email",
        AUTHENTICATION_FORM_LABEL_REGISTER_PASSWORD : "Mot de passe",
        AUTHENTICATION_FORM_LABEL_REGISTER_CONFIRM_PASSWORD  : "Confirmé votre mot de passe",


        AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_USERNAME : "Nom d'utilisateur",
        AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_EMAIL : "Adresse mail",
        AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_PASSWORD : "Mot de passe",
        AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_CONFIRM_PASSWORD : "Confirmé votre mot de passe",

        AUTHENTICATION_FORM_BTN_SUBMIT: "S'enregistrer",

        AUTHENTICATION_FORM_REGISTER_ERROR_EMAIL : "Email invalide.",
        AUTHENTICATION_FORM_REGISTER_ERROR_USERNAME : "Nom d'utilisateur invalide.",
        AUTHENTICATION_FORM_REGISTER_ERROR_PASSWORD : "Mot de passe invalide.",
        AUTHENTICATION_FORM_REGISTER_ERROR_PASSWORD_CONFIRM : "Le mot de passe ne correspond pas.",

        MODAL_TITLE_REGISTER_ERROR: "Une erreur est survenue.",

        AUTHENTICATION_FORM_REGISTER_REDIRECT_LOGIN_MESSAGE: "Bienvenue sur PetsBNB !",

        AUTHENTICATION_FORM_LOGIN_LABEL_EMAIL : "Email",

        AUTHENTICATION_FORM_LOGIN_PLACEHOLDER_EMAIL: "Adresse mail",
        AUTHENTICATION_FORM_BTN_SUBMIT_LOGIN: "Se connecter",

        AUTHENTICATION_FORM_LABEL_LOGIN_PASSWORD: "Mot de passe",
        AUTHENTICATION_FORM_PLACEHOLDER_LOGIN_PASSWORD: "Mot de passe",

        AUTHENTICATION_FORM_LOGIN_ERROR_EMAIL: "Email est invalide.",

        MODAL_TITLE_LOGIN_ERROR: "Une erreur est survenue.",

        MODAL_ERROR_LOGIN : "Identifiants invalides",

        MODAL_ANONYMOUS_ERROR_LOGIN: "Une erreur est survenue, veuillez réessayer."



    },
    EN: {
        AUTHENTICATION_ALREADY_ACCOUNT_SWITCH_1: "Already have account ? login",
        AUTHENTICATION_ALREADY_ACCOUNT_SWITCH_2: "No account ? register",

        // Authentication Form
        AUTHENTICATION_FORM_LABEL_REGISTER_USERNAME : "Username",
        AUTHENTICATION_FORM_LABEL_REGISTER_EMAIL : "Email",
        AUTHENTICATION_FORM_LABEL_REGISTER_PASSWORD : "Password",
        AUTHENTICATION_FORM_LABEL_REGISTER_CONFIRM_PASSWORD  : "Confirm your password",

        AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_USERNAME : "Username",
        AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_EMAIL : "Adress mail",
        AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_PASSWORD : "Password",
        AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_CONFIRM_PASSWORD : "Confirm password",

        AUTHENTICATION_FORM_BTN_SUBMIT: "Register",

        AUTHENTICATION_FORM_REGISTER_ERROR_EMAIL : "Email invalid.",
        AUTHENTICATION_FORM_REGISTER_ERROR_USERNAME : "Username invalid.",
        AUTHENTICATION_FORM_REGISTER_ERROR_PASSWORD : "Password invalid.",
        AUTHENTICATION_FORM_REGISTER_ERROR_PASSWORD_CONFIRM : "Password does not match.",

        MODAL_TITLE_REGISTER_ERROR: "Your informations are not valid.",

        AUTHENTICATION_FORM_REGISTER_REDIRECT_LOGIN_MESSAGE: "Welcome on PetsBNB !",

        AUTHENTICATION_FORM_LOGIN_LABEL_EMAIL : "Email",

        AUTHENTICATION_FORM_LOGIN_PLACEHOLDER_EMAIL: "Adress mail",
        AUTHENTICATION_FORM_BTN_SUBMIT_LOGIN: "Login",

        AUTHENTICATION_FORM_LABEL_LOGIN_PASSWORD: "Password",

        AUTHENTICATION_FORM_PLACEHOLDER_LOGIN_PASSWORD: "Password",

        AUTHENTICATION_FORM_LOGIN_ERROR_EMAIL: "Email is invalid.",

        MODAL_TITLE_LOGIN_ERROR: "Your informations are not valid.",


        MODAL_ERROR_LOGIN : "Invalid credentials.",

        MODAL_ANONYMOUS_ERROR_LOGIN: "An error is occurred. Please try again."




    }

};


/**
 * Return translation dictionnary for language given (string e.g FR or EN)
 * @param lang
 * @returns {*}
 */
export let getTranslation = (lang) => {

    if (lang === "FR") {
        return translation.FR;
    } else if (lang === "EN") {
        return translation.EN;
    } else {
        console.error(`No translation for this language given : ${lang}`);
    }
};