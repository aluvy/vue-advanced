<template>
  <div>
    <ul class="item_list">
      <li v-for="(item, i) in news" :key="i" :id="item.id">
        <strong>
          <a :href="item.url" target="blank">{{ item.title }}</a>
        </strong>
        <p>
          <span>{{ item.points }} points by {{ item.user }}</span>
          <span>{{ item.time_ago }}</span>
          <span>{{ item.type }}</span>
          <span>{{ item.comments_count }} comments</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['news'])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
}
</script>
