<template>
  <header>
    <h1><router-link to="/">Hacker News</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/news">NEWS</router-link></li>
        <li><router-link to="/jobs">JOBS</router-link></li>
        <li><router-link to="/ask">ASK</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header { display: flex; align-items: center; padding: 1.6rem 2rem; background: #42b883; }
header a:hover { color: inherit; }
h1 { font-size: 1.6rem; color: #fff; font-weight: 700; }
ul { display: flex; align-items: center; margin-left: 2.2rem; }
li + li { margin-left: 2rem; }
li a { font-size: 1.4rem; color: #fff; }
li a.router-link-exact-active { color: #35495e; font-weight: 700 }
</style>
