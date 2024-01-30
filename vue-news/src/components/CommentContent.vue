<template>
  <ul>
    <li v-for="(a, i) in propsData" :key="i">
      
      <div :class="`comment_item level-${a.level} id-${a.id}`">
        <div class="info_txt">
          <span><i class="fa-solid fa-user"></i> {{ a.user }}</span>2
          <span>{{ a.time_ago }}</span>
        </div>
        <div class="cont_txt" v-html="a.content"></div>
      </div>

      <template v-if="a.comments_count > 0">
        <CommentContent :propsData="a.comments"></CommentContent>
      </template>

    </li>
  </ul>
</template>

<script>
export default {
  name: 'CommentContent',
  props: {
    propsData: Array,
  }
}
</script>

<style scoped>
.comment_item { padding: 1rem 2rem; }
.comment_item .content_txt { padding-top: 1rem; }
.comment_item + ul { padding-left: 2rem; }
.cont_txt { padding-top: .6rem; }
</style>
