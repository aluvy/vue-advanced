import EventBus from '@/utils/EventBus';

// mixin
export default {
  // 재사용 할 component option & logic | data, methdos, create 등...
  // created() {
  //   EventBus.$emit('start:spinner');
  //   this.$store
  //     .dispatch('FETCH_LIST', this.$route.name)
  //     .then(() => {
  //       // EventBus.$emit('end:spinner');
  //     })
  //     .catch((e) => console.log(e));
  // },
  mounted() {
    console.log('mixins');
    EventBus.$emit('end:spinner');
  },
};
