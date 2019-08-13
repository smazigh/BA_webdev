<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>


     
  </div>
</template>
<script>
import Navbar from'./components/Navbar';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '@polymer/paper-button/paper-button.js';
import '@elifent/paper-datepicker/paper-datepicker.js';
import '@google-web-components/google-chart/google-chart.js';
export default {
  name:"app",
  components: {
    Navbar
  }
  
  
};
</script>


<style scoped>

</style>
