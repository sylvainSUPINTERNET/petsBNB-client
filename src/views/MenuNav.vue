<template>
    <div id="menu-nav">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/register">Register</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'menuNav',
        beforeCreate(){
            console.log("ok menu", "ok")
            console.log(this.$store.getters.userToken);

        },
        components: {
        }
    }
</script>


<style>
</style>
