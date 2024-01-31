<template>
  <UserProfile :userName="userName"></UserProfile>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  data() {
    return {
      userName: '',
    }
  },
  created() {
    this.userName = this.$route.params.id;
  },
  components: {
    UserProfile,
  },
}
</script>
