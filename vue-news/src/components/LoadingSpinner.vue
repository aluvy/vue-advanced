<template>
  <div class="loading" v-if="loading">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style scoped>
.loading { position: absolute; top: 50%; left: 50%; display: block; width: 6.4rem; height: 6.4rem; transform: translate(-50%, -50%); }
.loading div { position: absolute; top: 50%; display: block; width: 1.3rem; background: #42b883; animation: loading 1.2s cubic-bezier(1, 2, 0.5, 2) infinite; }
.loading div:nth-child(1) { right: 50%; transform: translate(-1.3rem, -50%); animation-delay: 0s; }
.loading div:nth-child(2) { left: 50%; transform: translate(-50%, -50%); animation-delay: .12s; }
.loading div:nth-child(3) { left:50%; transform: translate(1.3rem, -50%); animation-delay: .24s; }

@keyframes loading {
  0% { height: 5rem; }
  50%, 100% { height: 2.4rem; }
}
</style>
