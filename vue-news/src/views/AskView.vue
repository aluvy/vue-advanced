<template>
  <div>
    <ul>
      <li v-for="(item, i) in ask" :key="i">
        <p>id: {{ item.id }}</p>
        <p>comments_count: {{ item.comments_count }}</p>
        <p>points: {{ item.points }}</p>
        <p>time: {{ item.time }}</p>
        <p>time_ago: {{ item.time_ago }}</p>
        <p>title: {{ item.title }}</p>
        <p>type: {{ item.type }}</p>
        <p>url: {{ item.url }}</p>
        <p>user: {{ item.user }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index';

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    fetchAskList()
      .then( res => this.ask = res.data )
      .catch( e => console.log(e) )
  }
}
</script>

<style>

</style>