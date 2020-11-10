<template>
    <div class="teamMemberListItem__row">
        <div>
            {{ user.username }}
        </div>
        <div>
            {{ user.startDate }}
        </div>
        <div>
            {{ user.count }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamMemberListItem.vue",
        props: {
            user: {
                type: Object
            }
        }
    }
</script>

<style scoped>
.teamMemberListItem__row {
    display: flex;
    justify-content: space-between;
}
</style>