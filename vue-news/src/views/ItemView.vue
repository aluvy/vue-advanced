<template>
  <div>

    <section class="item_wrap">
      <div class="ttl_wrap">
        <strong>{{ item.title }}</strong>
        <div class="info_txt">
          <span>{{ item.points }} points by <router-link :to="`/user/${item.user}`"><i class="fa-solid fa-user"></i> {{ item.user }}</router-link></span>
          <span>{{ item.time_ago }}</span>
          <span>{{ item.comments_count }} comments</span>
        </div>
      </div>
      <div class="content_txt" v-html="item.content"></div>
    </section>

    <section class="form_wrap">
      <textarea></textarea>
      <button>add comment</button>
    </section>

    <section class="comment_wrap">
      <div v-for="(a, i) in item.comments" :key="i" :class="`comment_box level${a.level}`">
        
        <div class="comment">
          <div class="info_txt">
            <span><i class="fa-solid fa-user"></i> {{ a.user }}</span>
            <span>{{ a.time_ago }}</span>
            <span>next</span>
          </div>
          <div class="content_txt" v-html="a.content"></div>
        </div>

        <!-- <div class="comment_box" :class="`level${b.level}`" v-if="a.comments_count" v-for="(b, j) in a.comments" :key="j">
          <div>
            <span><i class="fa-solid fa-user"></i> {{ a.user }}</span>
            <span>{{ a.time_ago }}</span>
            <span>next</span>
          </div>
          <div v-html="a.content"></div>
        </div> -->
      </div>
    </section>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['item']),
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id);
  }
}
</script>

<style>
.info_txt { color: #777; font-size: 1.2rem; }
.info_txt span + span::before { content: '|'; padding: 0 0.6rem; opacity: .5; }
.content_txt { font-size: 1.4rem; }
.content_txt p + p { margin-top: 1rem; }

.item_wrap .ttl_wrap { padding: 2rem; }
.item_wrap .ttl_wrap strong { display: block; font-weight: 400; font-size: 1.8rem; }
.item_wrap .ttl_wrap strong + .info_txt { margin-top: 1rem; }
.item_wrap .content_txt { border-top: 1px solid #eee; padding: 2rem; }

.comment_wrap .comment_box { padding: 2rem; }
.comment_wrap .level0 + .level0 { border-top: 1px solid #eee; }
.comment_wrap .comment .content_txt { padding-top: 1rem; }

/* .comment_box.level1 { margin-left: 2rem; } */
</style>