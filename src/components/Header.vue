<template>
  <div id="header-container">
    <h1>{{ title }}</h1>
    <h5>{{ slogan }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    slogan: String
  }
};
</script>


<style scoped>
#header-container {
  background-color: #c81c20;
  color: white;
}
</style>



