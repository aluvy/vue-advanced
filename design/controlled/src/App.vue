<template>
  <CheckBox v-model="checked"></CheckBox>
</template>

<script>
import CheckBox from './components/CheckBox.vue'

export default {
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    // toggle(event) {
    //   console.log(event)
    //   // this.$emit('input', !this.value);
    // }
  }
  // created() {
  //   fetchCheckBox()
  //     .then(( result => this.checkboxes = result.data ))
  //     .catch( e => console.log(e) )
  // }
}
</script>
