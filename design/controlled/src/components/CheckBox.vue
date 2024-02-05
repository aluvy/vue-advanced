<template>
  <input type="checkbox" :value="value" @click="$emit('input', !value)">
</template>

<script>
export default {
  props: {
    value: Boolean
  },
}
</script>
