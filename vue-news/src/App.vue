<template>
  <div id="app">
    <header-nav></header-nav>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <loading-spinner :loading="loadingStatus"></loading-spinner>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import EventBus from './utils/EventBus.js'

export default {
  components: {
    HeaderNav,
    LoadingSpinner
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    EventBus.$on('start:spinner', this.startSpinner);
    EventBus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    EventBus.$off('start:spinner', this.startSpinner);
    EventBus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style scoped>
.page-enter-active { position: absolute; width: 100%; animation: fade-in .3s .1s backwards; }
.page-leave-active { position: absolute; width: 100%; animation: fade-in .1s reverse forwards; }

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
