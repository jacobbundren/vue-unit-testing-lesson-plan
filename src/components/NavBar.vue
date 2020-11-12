<template>
    <div class="navBar">
        <router-link to="/home" title="Home" class="navBar__logoLink">
            <span class="material-icons navBar__logo">report</span>
            <span>Dumb Dumb</span>
        </router-link>
        <span class="navBar__spacer"></span>
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
    font-size: 2.5rem;
    margin-right: 5px;
}
.navBar__link {
    font-size: 1.2rem;
    width: 150px;
    display: flex;
}
.navBar__logoLink {
    align-items: center;
    width: 225px;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
}
.navBar__icon {
    margin-right: 5px;
}

.navBar__icon:hover {
    color: #FF4139;
}
.navBar__spacer {
    width: 100%;
}
</style>