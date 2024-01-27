<template>
  <header>
    <h1><router-link to="/">logo</router-link></h1>
    <nav>
      <ul>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/ask">Ask</router-link></li>
        <li><router-link to="/jobs">Jobs</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header { display: flex; align-items: center; padding: 0.6rem 2rem; background: #42b883; }
ul { display: flex; align-items: center; margin-left: 2rem; }
li + li { margin-left: 2rem; }
li a { font-size: 1.6rem; color: #fff; }
li a.router-link-exact-active { color: #35495e }
</style>