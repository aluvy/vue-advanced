<template>
  <div>
    <ul>
      <AppItem v-for="(a, i) in items" :key="i">
        {{ a }}

        <div v-if="i===1">
          <button>click</button>
        </div>
        <template v-if="i===2">
          <div style="color:blue; font-weight: bold">이미지</div>
        </template>

        <template v-slot:area2>
          <div style="color: #999;">area2 영역</div>
        </template>
        
      </AppItem>
    </ul>
  </div>
</template>

<script>
import AppItem from './AppItem.vue'

export default {
  components: {
    AppItem,
  },
  data() {
    return {
      items: [ '아이템 1','아이템 2','아이템 3','아이템 4','아이템 5', ]
    }
  }
}
</script>
