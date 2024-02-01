<template>
  <div id="app">
    <header>
      <h1>Callback 과 async & await 코드 비교</h1>
    </header>
    <div class="btn_wrap">
      <button @click="loginUser">login | callback</button>
      <button @click="loginUser">login | async & await</button>
    </div>
    <h2>List</h2>
    <ul>
      <li v-for="(item, i) in items" :key="i">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      items: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then( res => {
          console.log(res);
          if(res.data.id === 1){
            console.log('사용자가 인증되었습니다.');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then( res => {
                console.log(res);
                this.items = res.data;
              })
              .catch( e => console.log(e) )
          }
        })
        .catch( e => console.log(e) );
    },
    async loginUser1() {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      console.log(res);

      if( res.data.id === 1 ){
        console.log('사용자가 인증되었습니다.');
        let list = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(list);
        this.item = list.data;
      }

    }
  }
}
</script>

<style>
* { padding: 0; margin: 0; list-style: none;  appearance: none; }
html { font-size: 10px; }
body { font-size: 1.6rem; }
ul li { padding: 1rem; }
ul li + li { border-top: 1px solid #ddd; }
header { background: #000; padding: 1.2rem 1.6rem; }
.btn_wrap { display: flex; align-items: center; gap: 0.4rem; padding: 1rem; }
button { padding: 0.8rem 1.6rem; border: 0 none; background: #3eaf7c; color: #fff; cursor: pointer; border-radius: 4px; }
h1 { color: #fff; font-size: 1.6rem; }
h2 { padding: 0.6rem 1rem; }
</style>
