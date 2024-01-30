<template>
  <div id="app">
    <header-nav></header-nav>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'

export default {
  components: {
    HeaderNav
  }  
}
</script>

<style scoped>
.page-enter-active { position: absolute; animation: fade-in .3s .1s backwards; }
.page-leave-active { position: absolute; animation: fade-in .1s reverse forwards; }

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
