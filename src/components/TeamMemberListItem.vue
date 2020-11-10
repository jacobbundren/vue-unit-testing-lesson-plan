<template>
    <div class="teamMemberListItem__row">
        <div class="teamMemberListItem__cell">
            {{ member.name }}
        </div>
        <div class="teamMemberListItem__cell">
            {{ member.startDate }}
        </div>
        <div class="teamMemberListItem__cell">
            {{ member.count }}
        </div>
        <div class="teamMemberListItem__cell">
            {{ calculateDumbLevel }}
        </div>
        <div class="teamMemberListItem__buttonCell">
            <input @click="addDumb" type="button" value="I did a dumb" class="teamMemberListItem__button"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamMemberListItem.vue",
        props: {
            member: {
                type: Object
            }
        },
        methods: {
            addDumb() {
                this.member.count = this.member.count + 1;
            },

        },
        computed: {
            calculateDumbLevel() {
                let dumbLevel = "";
                if (this.member.count === 0) {
                    dumbLevel = "Smart... For Now";
                } else if (this.member.count >= 1 && this.member.count < 5) {
                    dumbLevel = "Barely Dumb";
                } else if (this.member.count >= 5 && this.member.count < 10) {
                    dumbLevel = "Dumb";
                } else if (this.member.count >= 10 && this.member.count < 15) {
                    dumbLevel = "Dangerously Dumb";
                } else {
                    dumbLevel = "Jimmy Level Dumb"
                }
                return dumbLevel;
            }
        }
    }
</script>

<style lang="scss">
    @import 'src/styles/theme';
.teamMemberListItem__row {
    display: flex;
    justify-content: space-between;
    height: 4rem;
    font-size: 1.25em;
    align-items: center;
}
.teamMemberListItem__button {
    width: 130px;
    height: 40px;
    background-color: var(--app-red);
    border-color: transparent;
    border-radius: 5px;
    color: #FBF5F3;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.1s;
}
.teamMemberListItem__button:active {
    outline: none;
    transform: scale(.98);
}
.teamMemberListItem__button:focus {
    outline: none;
}

.teamMemberListItem__button:hover {
    box-shadow: 1px 1px 3px var(--app-grey);
}

.teamMemberListItem__buttonCell {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .teamMemberListItem__cell {
        width: 20%;
    }
</style>