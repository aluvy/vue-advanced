<template>
  <div class="user_box">
    <div class="photo"><i class="fa-solid fa-user"></i></div>
    <ul class="info">
      <li>
        <span>user</span>
        <p>{{ user.id }}</p>
      </li>
      <li>
        <span>created</span>
        <p>{{ user.created }}</p>
      </li>
      <li>
        <span>karma</span>
        <p>{{ user.karma }}</p>
      </li>
      <li>
        <span>about</span>
        <p v-html="user.about"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id);
  }
}
</script>

<style scoped>
.user_box { display: flex; align-items: flex-start; padding: 2rem; }
.user_box .photo { position: relative; flex: 0 0 10rem; }
.user_box .photo::before { content:''; display: block; width: 100%; padding-bottom: 100%; border-radius: 100%; background: #eee; box-shadow: inset 3px 3px 1rem rgba(0,0,0, 0.05) }
.user_box .photo i { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 4rem; color: #fff; }
.user_box .info { flex: 1 1 calc(100% - 10rem); margin-left: 2rem; }
.user_box .info li { display: flex; align-items: flex-start; }
.user_box .info li + li { margin-top: 0.4rem; }
.user_box .info li span { flex: 0 0 10rem; }
.user_box .info li p { flex: 1 1 calc(100% - 10rem); }
</style>
