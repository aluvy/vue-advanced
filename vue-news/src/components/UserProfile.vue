<template>
  <div class="user_box">
    
    <div class="photo"><i class="fa-solid fa-user"></i></div>

    <div class="id">
      <strong>{{ user.id }}</strong>
      <span>Joined {{ user.created }}</span>
    </div>

    <dl>
      <dt>karma</dt>
      <dd>{{ user.karma }}</dd>
      <dt>about</dt>
      <template v-if="user.about">
        <dd v-html="user.about"></dd>
      </template>
      <template v-else>
        <dd><p class="no_content">empty :-)</p></dd>
      </template>
    </dl>

  </div>
</template>

<script>
import CommonMixin from '../mixins/CommonMixin';
// import { mapGetters } from 'vuex';

export default {
  props: {
    userName: String,
  },
  data() {
    return {
      user: {},
    }
  },
  // computed: {
  //   ...mapGetters(['user']),
  // },
  created() {
    // this.$store.dispatch('FETCH_USER', this.userName);
    this.user = this.$store.getters.user;
  },
  mixins: [CommonMixin]
}
</script>

<style scoped>
.user_box { padding: 4rem 2rem; }
.user_box .photo { position: relative; width: 10rem; margin: 0 auto; }
.user_box .photo::before { content:''; display: block; width: 100%; padding-bottom: 100%; border-radius: 100%; background: #eee; box-shadow: inset 3px 3px 1rem rgba(0,0,0, 0.05) }
.user_box .photo i { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 4rem; color: #fff; }
.user_box .id { text-align: center; margin-top: 1rem; }
.user_box .id strong { display: block; }
.user_box .id span { display: block; margin-top: 0.6rem; font-size: 1.2rem; color: #999; }

.user_box dl { text-align: center; }
.user_box dt { font-size: 1.2rem; color: #999; margin-top: 3rem; padding-top: 3rem; border-top: 1px solid #eee; }
.user_box dd { font-size: 1.4rem; padding-top: 1rem; }
.user_box dd:nth-of-type(1) { color: #42b883; font-weight: 500; font-size: 2rem; }
</style>
