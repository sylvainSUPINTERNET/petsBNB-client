<template>
    <div class="register container">

        <b-form @submit.prevent="registerSubmit">
            <b-form-group id="input-group-1" :label="translation.AUTHENTICATION_FORM_LABEL_REGISTER_USERNAME"
                          label-for="input-2">
                <b-form-input
                        id="input-1"
                        required
                        type="text"
                        v-model="username"
                        :placeholder="translation.AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_USERNAME"
                ></b-form-input>
            </b-form-group>
            <div v-show="errors.username">
                <b-alert show variant="danger">{{errors.username}}</b-alert>
            </div>


            <b-form-group id="input-group-2" :label="translation.AUTHENTICATION_FORM_LABEL_REGISTER_EMAIL"
                          label-for="input-2">
                <b-form-input
                        id="input-2"
                        required
                        type="email"
                        v-model="email"
                        :placeholder="translation.AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_EMAIL"
                ></b-form-input>
            </b-form-group>
            <div v-show="errors.email">
                <b-alert show variant="danger">{{errors.email}}</b-alert>
            </div>

            <b-form-group id="input-group-3" :label="translation.AUTHENTICATION_FORM_LABEL_REGISTER_PASSWORD"
                          label-for="input-3">
                <b-form-input
                        id="input-3"
                        required
                        type="password"
                        v-model="password"
                        :placeholder="translation.AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_PASSWORD"
                ></b-form-input>
            </b-form-group>
            <div v-show="errors.password">
                <b-alert show variant="danger">{{errors.password}}</b-alert>
            </div>

            <b-form-group id="input-group-4" :label="translation.AUTHENTICATION_FORM_LABEL_REGISTER_CONFIRM_PASSWORD"
                          label-for="input-4">
                <b-form-input
                        id="input-4"
                        required
                        type="password"
                        v-model="passwordConfirm"
                        :placeholder="translation.AUTHENTICATION_FORM_PLACEHOLDER_REGISTER_CONFIRM_PASSWORD"
                ></b-form-input>
            </b-form-group>
            <div v-show="errors.passwordConfirm">
                <b-alert show variant="danger">{{errors.passwordConfirm}}</b-alert>
            </div>


            <b-button class="m-3" squared variant="outline-success" type="submit" :disabled="submited">
                {{translation.AUTHENTICATION_FORM_BTN_SUBMIT}}
                <b-spinner small label="Small Spinner" v-show="displaySpinner"></b-spinner>
            </b-button>


            <!-- modal -->

            <b-modal id="modal-error" v-model="modalErrorShow" :title="translation.MODAL_TITLE_REGISTER_ERROR">
                <p class="text-center">
                    {{modalText}}
                </p>
            </b-modal>


            <!-- end modal -->

        </b-form>
    </div>
</template>

<script>

    import ApiAuthentication from "../api/Authentication/Authentication";
    import Router from "../router";

    export default {
        name: 'Register',
        props: {
            // TRANSLATION
            translation: Object,
        },
        data() {
            return {
                // STATE
                username: "",
                email: "",
                password: "",
                passwordConfirm: "",
                errors: {
                    username: "",
                    email: "",
                    password: "",
                    passwordConfirm: ""
                },

                // UI
                displaySpinner: false,
                modalErrorShow: false,
                modalText: "",
                submited: false,

                // API
                apiRequestDelay: 600,


            }
        },
        methods: {
            registerSubmit: function () {
                let self = this; // save context


                this.disableSubmit(true);


                let email = this.email.trim();
                let password = this.password.trim();
                let username = this.username.trim();
                let passwordConfirm = this.passwordConfirm.trim();


                if (this.isValidEmail(email)) {
                    this.errors.email = "";
                } else {
                    this.errors.email = this.translation.AUTHENTICATION_FORM_REGISTER_ERROR_EMAIL;
                }

                if (this.isValidPassword(password, passwordConfirm)) {
                    this.errors.password = "";
                    this.errors.passwordConfirm = "";
                } else {
                    this.errors.password = this.translation.AUTHENTICATION_FORM_REGISTER_ERROR_PASSWORD;
                    this.errors.passwordConfirm = this.translation.AUTHENTICATION_FORM_REGISTER_ERROR_PASSWORD_CONFIRM;
                }

                if (this.isValidUsername(username)) {
                    this.errors.username = "";
                } else {
                    this.errors.username = this.translation.AUTHENTICATION_FORM_REGISTER_ERROR_USERNAME;
                }

                if (this.isValidForm(this.errors)) {
                    this.mustSpin(true);
                    setTimeout(
                        () => {
                            ApiAuthentication
                                .register(username, email, password)
                                .then((data) => {
                                    self.mustSpin(false);
                                    self.disableSubmit(false);
                                    Router.push({ path: '/login', query: { welcome: 'notification' }})
                                })
                                .catch(err => {
                                        self.mustSpin(false);
                                        self.disableSubmit(false);
                                        self.modalText = err.response.data.data.message;
                                        self.modalErrorShow = true
                                })
                        },
                        this.apiRequestDelay);
                } else {
                    self.disableSubmit(false);
                    console.log("not valid");
                }

            },
            isValidEmail: function (mailStr) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailStr);
            },
            isValidPassword: function (password, passwordConfirm) {
                if (password.length > 6) {
                    return password === passwordConfirm;
                } else {
                    return false
                }
            },
            isValidUsername: function (username) {
                return username.length > 2;
            },
            isValidForm: function (errors) {
                return errors.email === "" && errors.username === "" && errors.password === "" && errors.passwordConfirm === "";
            },
            mustSpin (boolean) {
                return this.displaySpinner = boolean;
            },
            disableSubmit ( boolean ) {
                return this.submited = boolean;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
