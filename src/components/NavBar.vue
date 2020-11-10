<template>
    <div class="navBar">
        <router-link to="/home" title="Home" class="navBar__logoLink navBar__link">
            <span class="material-icons navBar__logo">bug_report</span>
            Bugly
        </router-link>
        <span class="navBar__spacer"></span>
        <router-link to="/home" title="Home" class="navBar__link">
            <span class="material-icons navBar__icon">home</span>
            Home
        </router-link>
        <router-link to="/home" title="Admin" class="navBar__link">
            <span class="material-icons navBar__icon">lock</span>
            Admin
        </router-link>
        <router-link to="/home" title="Home" class="navBar__link navBar__button">
            <span class="material-icons navBar__icon">face</span>
            {{ user }}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        computed: {
            user: function() {
                return this.$store.state.authenticatedUser;
            }
        }
    }
</script>

<style scoped>
.navBar {
    padding: 0 50px;
    height: 65px;
    display: flex;
    color: #272727;
    justify-content: flex-end;
    align-items: center;
}
.navBar__logo {
    color: #FF4139;
    font-size: 2rem;
    transform: rotate(15deg);
    margin-right: 5px;
}
.navBar__link {
    font-size: 1.2rem;
    width: 150px;
    margin-right: 40px;
    display: flex;
}
.navBar__logoLink {
    align-items: center;
}
.navBar__icon {
    margin-right: 5px;
}
.navBar__spacer {
    width: 100%;
}
</style>