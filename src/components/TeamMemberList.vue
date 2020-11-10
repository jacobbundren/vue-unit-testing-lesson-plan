<template>
    <div>
        <h1>Team Member Dumb Level</h1>
        <div class="teamMemberList">
            <div class="teamMemberList__headerRow">
                <div class="teamMemberList__headerCell">
                    Name
                </div>
                <div class="teamMemberList__headerCell">
                    Start Date
                </div>
                <div class="teamMemberList__headerCell">
                    Dumb Count
                </div>
                <div class="teamMemberList__headerCell">
                    Dumb Level
                </div>
                <div class="teamMemberList__headerCell"/>
            </div>
            <TeamMemberListItem v-for="member in memberList" :member="member" :key="member.id" class="teamMemberList__listItem"/>
        </div>
    </div>
</template>

<script>
    import members from "../data/members";
    import TeamMemberListItem from "@/components/TeamMemberListItem";
    export default {
        name: "TeamMemberList",
        components: {
            TeamMemberListItem
        },
        data() {
            return {
                memberList: members
            }
        }
    }
</script>

<style lang="scss">
    @import 'src/styles/theme.scss';
    h1 {
        font-weight: bold;
    }
    .teamMemberList {
        margin: 30px 80px;
    }
    .teamMemberList__headerRow {
        display: flex;
        font-weight: bold;
        font-size: 1.5rem;
    }
    .teamMemberList__headerCell {
        width: 20%;
    }
    .teamMemberList__listItem:nth-child(odd) {
         background-color: var(--background-alt);
    }

</style>