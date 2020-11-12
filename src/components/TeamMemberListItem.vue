<template>
    <div class="teamMemberListItem__row">
        <div class="teamMemberListItem__cell teamMemberListItem__name">
            {{ member.name }}
        </div>
        <div class="teamMemberListItem__cell teamMemberListItem__startDate">
            {{ member.startDate }}
        </div>
        <div class="teamMemberListItem__cell teamMemberListItem__count">
            {{ count }}
        </div>
        <div class="teamMemberListItem__cell teamMemberListItem__dumbLevel">
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
        data() {
            return {
                count: this.member.count
            }
        },
        methods: {
            addDumb() {
                this.count++;
            },
        },
        computed: {
            calculateDumbLevel() {
                let dumbLevel = "";
                if (this.count === 0) {
                    dumbLevel = "Smart... For Now";
                } else if (this.count >= 1 && this.count < 5) {
                    dumbLevel = "Barely Dumb";
                } else if (this.count >= 5 && this.count < 10) {
                    dumbLevel = "Dumb";
                } else if (this.count >= 10 && this.count < 15) {
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