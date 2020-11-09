<template>
    <div class="home">
        <div class="home__iconCircle">
            <span class="material-icons home__bugIcon">bug_report</span>
        </div>
        <div class="home__title">
            Buggy
        </div>
    </div>

</template>

<script>
    export default {
        name: "Home.vue"
    }
</script>

<style scoped>
.home {
    margin-top: 80px;
}
.home__iconCircle {
    height: 175px;
    width: 175px;
    border-radius: 50%;
    background-color: #FF4139;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}
.home__bugIcon {
    font-size: 6.25em;
    color: #FBF5F3;
    transform: rotate(15deg);
}
.home__title {
    font-size: 2.5em;
    margin-top: .5em;
}
</style>