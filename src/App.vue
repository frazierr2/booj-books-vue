<template>
  <div id="app">
    <b-nav>
      <b-nav-item>
        <router-link to="/" class="home-button">Home</router-link>
      </b-nav-item>
    </b-nav>

    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("http://www.booj.com/img/ninja-home.jpg");
  padding-bottom: 40px;
}
.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.home-button {
  color: white;
}
.home-button:hover {
  color: gold;
}
</style>
