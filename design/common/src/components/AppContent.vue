<template>
  <div>
    <ul>
      <li v-for="(a, i) in items" :key="i">
        {{ a }}
      </li>
    </ul>
    <button @click="$emit('renewItems')">renewItems</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
}
</script>
