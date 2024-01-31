<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import CommonMixin from '../mixins/CommonMixin'

export default {
  components: {
    ListItem,
  },
  mixins: [CommonMixin],
}
</script>
