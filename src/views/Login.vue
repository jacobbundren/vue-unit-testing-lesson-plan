<template>
    <div class="login">
        <div class="login__iconCircle">
            <span class="material-icons login__bugIcon">report</span>
        </div>
        <div class="login__title">
            Dumb Dumb
        </div>
        <div class="login__form">
            <input type="text" id="username" v-model="username" placeholder="Username" class="login__input"/>
            <input type="password" id="password" v-model="password" placeholder="Password" class="login__input"/>
            <input type="button" @click="login" value="Login" class="login__button"/>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: ""
            };
        },
        methods: {
            login: function() {
                if (this.username && this.password) {
                    this.$store.dispatch("login", {
                        username: this.username,
                        password: this.password
                    }).then(() => {
                        this.$router.push({ path: "/home" });
                    }).catch(err => {
                        this.$awn.alert(err);
                    })
                } else {
                    this.$awn.alert("Must enter username and password");
                }
            }
        }
    }
</script>

<style lang="scss">
    @import 'src/styles/theme.scss';
.login {
    margin-top: 80px;
}
.login__iconCircle {
    height: 175px;
    width: 175px;
    border-radius: 50%;
    background-color: var(--app-red);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}
.login__bugIcon {
    font-size: 8.25em;
    color: #FBF5F3;
}
.login__title {
    font-size: 2.5em;
    margin-top: .5em;
}
.login__form {
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login__input {
    width: 300px;
    height: 35px;
    margin-top: 5px;
    border-radius: 5px;
    border-color: transparent;
    background-color: white;
}
.login__button {
    width: 150px;
    height: 40px;
    background-color: #449DD1;
    border-color: transparent;
    border-radius: 5px;
    margin-top: 10px;
    color: #FBF5F3;
    font-size: 1.15em;
    cursor: pointer;
    transition: .1s;
}
    .login__button:hover {
        box-shadow: 2px 2px 3px var(--app-grey);
    }
    .login__button:active {
        outline: none;
        transform: scale(.98);
    }
    .login__button:focus {
        outline: none;
    }

</style>