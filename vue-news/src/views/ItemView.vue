<template>
  <div>

    <section class="item_wrap">
      <div class="ttl_wrap">
        <strong>{{ item.title }}</strong>
        <p class="info_txt">
          <span>{{ item.points }} points</span>
          <span><router-link :to="`/user/${item.user}`"><i class="fa-solid fa-user"></i> {{ item.user }}</router-link></span>
          <span>{{ item.time_ago }}</span>
          <span>{{ item.comments_count }} comments</span>
        </p>
      </div>
      <div class="cont_txt" v-html="item.content"></div>
    </section>

    <section class="item_form">
      <textarea></textarea>
      <button>add comment</button>
    </section>

    <section class="item_content">
      <CommentContent :propsData="item.comments"></CommentContent>
    </section>

  </div>
</template>

<script>
import CommentContent from '../components/CommentContent.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'ItemView',
  components: {
    CommentContent,
  },
  computed: {
    ...mapGetters(['item']),
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id);
  }
}
</script>

<style scoped>
.item_wrap .ttl_wrap { padding: 2rem; }
.item_wrap .ttl_wrap strong { display: block; font-weight: 500; font-size: 1.8rem; }
.item_wrap .ttl_wrap strong + .info_txt { margin-top: 1rem; }
.item_wrap .cont_txt { border-top: 1px solid #eee; padding: 2rem; }
.item_form { padding: 3rem 2rem; }
.item_form textarea { width: 100%; height: 8rem; box-sizing: border-box; resize: none; border: 1px solid #dedede; padding: 0.8rem 1rem; background: #f7f7f7; box-shadow: inset 2px 2px 5px rgba(0,0,0, 0.05); outline: none; transition: all .3s; }
.item_form textarea:focus { border-color: #444; }
.item_form button { background: #42b883; color: #fff; padding: 1rem 2rem; }
.item_content { padding: 1rem 0; }
</style>
