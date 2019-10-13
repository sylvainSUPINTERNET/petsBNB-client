<template>
    <div class="register container">
        <p v-show="isNewUser">{{translation.AUTHENTICATION_FORM_REGISTER_REDIRECT_LOGIN_MESSAGE}}</p>

        <b-form @submit.prevent="loginSubmit">
            <b-form-group id="input-group-1" :label="translation.AUTHENTICATION_FORM_LOGIN_LABEL_EMAIL"
                          label-for="input-1">
                <b-form-input
                        id="input-1"
                        required
                        type="email"
                        v-model="email"
                        :placeholder="translation.AUTHENTICATION_FORM_LOGIN_PLACEHOLDER_EMAIL"
                ></b-form-input>
            </b-form-group>
            <div v-show="errors.password">
                <b-alert show variant="danger">{{errors.password}}</b-alert>
            </div>

            <b-form-group id="input-group-2" :label="translation.AUTHENTICATION_FORM_LABEL_LOGIN_PASSWORD"
                          label-for="input-2">
                <b-form-input
                        id="input-2"
                        required
                        type="password"
                        v-model="password"
                        :placeholder="translation.AUTHENTICATION_FORM_PLACEHOLDER_LOGIN_PASSWORD"
                ></b-form-input>
            </b-form-group>
            <div v-show="errors.password">
                <b-alert show variant="danger">{{errors.password}}</b-alert>
            </div>

            <b-button class="m-3" squared variant="outline-success" type="submit" :disabled="submited">
                {{translation.AUTHENTICATION_FORM_BTN_SUBMIT_LOGIN}}
                <b-spinner small label="Small Spinner" v-show="displaySpinner"></b-spinner>
            </b-button>


            <b-modal id="modal-error" v-model="modalErrorShow" :title="translation.MODAL_TITLE_LOGIN_ERROR">
                <p class="text-center">
                    {{modalText}}
                </p>
            </b-modal>



        </b-form>
    </div>
</template>

<script>
    import ApiAuthentication from "../api/Authentication/Authentication";
    import store from '../store';


    export default {
        name: 'Login',
        mounted() {
            this.queryParams = this.$route.query;

            /**
             * Check if the user is from register redirection to display a welcome message
             */
            if (this.queryParams.welcome && this.queryParams.welcome === "notification") {
                this.isNewUser = true;
            } else {
                this.isNewUser = false;
            }
        },
        props: {
            translation: Object
        },
        data() {
            return {
                isNewUser: {},
                notification_new_user: "",
                isWelcome: {},
                email: "",
                password: "",
                errors: {
                    email: "",
                    password: "",
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
            loginSubmit: function () {
                let self = this;

                this.disableSubmit(true);

                let email = this.email.trim();
                let password = this.password.trim();
                let form = {
                    email: email,
                    password: password,
                };

                if (this.isValidEmail(form.email)) {
                    this.errors.email = "";
                } else {
                    this.errors.email = this.translation.AUTHENTICATION_FORM_LOGIN_ERROR_EMAIL;
                }

                if (this.isValidPassword(form.password)) {
                    this.errors.password = ""
                } else {
                    this.errors.password = this.translation.AUTHENTICATION_FORM_LOGIN_ERROR_EMAIL;
                }
                if (this.isValidForm(this.errors)) {
                    this.mustSpin(true);
                    setTimeout(
                        () => {
                            ApiAuthentication
                                .login(form.email, form.password)
                                .then((response) => {
                                    console.log("DATA", response);
                                    self.mustSpin(false);
                                    self.disableSubmit(false);
                                    self.$store.dispatch("login", {jwt: response.data.token});
                                    // TODO => redirect to home page
                                    // TODO => trouver un moyen de refresh un jwt si il est expiré
                                    // TODO => ce token sera a mettre dans toutes les requêtes par la suite Authorization Bearer JWTici
                                })
                                .catch((err) => {
                                    console.log("ERROR ", err);
                                    self.mustSpin(false);
                                    self.disableSubmit(false);

                                    if(err.response.status !== 200 && err.response.data.message === "Access Denied"){
                                        self.modalText = self.translation.MODAL_ERROR_LOGIN;
                                    } else if(err.response.status !== 200 && err.response.data.message !== "Access Denied") {
                                        self.modalText = self.translation.MODAL_ANONYMOUS_ERROR_LOGIN;
                                    }

                                    self.modalErrorShow = true;
                                })
                        },
                        this.apiRequestDelay
                    );
                } else {
                    self.disableSubmit(false);
                    self.mustSpin(false);
                }
            },
            isValidEmail: function (mailStr) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailStr);
            },
            isValidPassword: function (password, passwordConfirm) {
                return password.length > 6;
            },

            isValidForm: function (errors) {
                return errors.email === "" && errors.password === "";
            },
            mustSpin(boolean) {
                return this.displaySpinner = boolean;
            },
            disableSubmit(boolean) {
                return this.submited = boolean;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
