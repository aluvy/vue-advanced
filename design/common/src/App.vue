<template>
  <div>
    <AppHeader :appTitle="appTitle"></AppHeader>
    <AppContent :items="items" @renewItems="renewItems"></AppContent>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'

export default {
  data() {
    return {
      appTitle: 'Common Approach',
      items: [10, 20, 30],
    }
  },
  methods: {
    renewItems() {
      this.items = [40, 50, 60];
    }
  },
  components: {
    AppHeader,
    AppContent
  }
}
</script>

<style>

</style>
