<template>
  <ul class="item_list">
    <li v-for="(item, i) in data" :key="i" :id="item.id">

      <template v-if="item.points">
        <div class="points">
          {{ item.points }}
          <small>points</small>
        </div>
      </template>

      <div class="ttl_wrap">
        
        <strong>
          <template v-if="$route.name !== 'ask'">
            <a :href="item.url" target="blank">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </template>
        </strong>

        <p class="info_txt">
          <span v-if=" item.type === 'job' " class="domain"><a :href="`http://${item.domain}`" target="blank">{{ item.domain }}</a></span>
          <span v-if="item.user"><router-link :to="`/user/${item.user}`"><i class="fa-solid fa-user"></i> {{ item.user }}</router-link></span>
          <span>{{ item.time_ago }}</span>
          <span>{{ item.comments_count }} comments</span>
        </p>

      </div>

    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    data(){
      const name = this.$route.name
      return this.$store.getters[name];
    }
  },
  created() {
    const name = (this.$route.name).toUpperCase();
    this.$store.dispatch(`FETCH_${name}`);
  }
}
</script>
