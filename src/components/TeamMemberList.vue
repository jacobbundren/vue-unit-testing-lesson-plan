<template>
    <div class="teamMemberList">
        <table>
            <thead>
                <th scope="col" class="table__nameHeader">Name</th>
                <th scope="col" class="table__startDateHeader">Start Date</th>
                <th scope="col" class="table__dumbCountHeader">Dumb Count</th>
                <th scope="col" class="table__dumbRatingHeader">Dumb Rating</th>
            </thead>
            <tbody>
                <tr
                    class="teamMemberList__item"
                    v-for="member in memberList"
                    :key="member.id"
                >
                    <td>
                        {{ member.name }}
                    </td>
                    <td>
                        {{ member.startDate }}
                    </td>
                    <td>
                        {{ member.count }}
                    </td>
                    <td>
                        REAL DUMB
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import members from "../data/members";
    export default {
        name: "TeamMemberList",
        components: {
        },
        data() {
            return {
                memberList: members
            }
        }
    }
</script>

<style scoped lang="scss">
    .teamMemberList {
        margin-top: 20px;

        table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }

        .table__nameHeader {
            width: 30%;
        }

        .table__startDateHeader {
            width: 15%;
        }

        .table__dumbCountHeader {
            width: 15%
        }

        .table__dumbRatingHeader {
            width: 40%;
        }

    }

</style>