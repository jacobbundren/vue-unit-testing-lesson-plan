<template>
  <div class="home">
    <TeamMemberList class="home__memberList"></TeamMemberList>
  </div>
</template>

<script>
// @ is an alias to /src
import TeamMemberList from '@/components/TeamMemberList.vue'

export default {
  name: 'Home',
  components: {
    TeamMemberList
  }
}
</script>