<template>
  <div id="header-container">
    <img class="booj-logo" src="http://www.booj.com/img/booj-triangle.png" alt>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>


<style scoped>
#header-container {
  color: white;
}
.booj-logo {
  width: 15%;
}
</style>



