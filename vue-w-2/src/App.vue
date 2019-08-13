<template>
  <div id="app">
    
    
    <div class="container">
      <FirstCharts v-if="renderComponent" v-bind:array1="final" v-bind:isStack="isStackk"/>
    </div>
    <button v-on:click="setStacked">Sarah</button>
    
  </div>
</template>

<script>
import testComp from './components/testComp.vue'
import Vue from 'vue'
import FirstCharts from './components/FirstCharts.vue'


export default {
  name: 'app',
  components: {
    FirstCharts
  },
   data() {
    return {
    apiData: undefined,
    idArray: undefined,
    powerArray: undefined,
    final: [],
    isStackk: true,
    renderComponent: true

  }
},mounted() {
  this.loadApi();
  

}, methods: {
  forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;
        
        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      },

  setStacked : function() {
    if (this.isStackk) {
      this.isStackk = false;
    } else {
      this.isStackk = true;
    }
    this.forceRerender();
  },
     loadApi: function() {
          this.$http.get('https://api.myjson.com/bins/1gkfcj').then(this.successCallback, this.errorCallback);

      },
      successCallback: function (response) {
          this.apiData = response.data;
          this.idArray = new Array();
          this.powerArray = new Array();
          // for (var i = 0; i < this.apiData.resourcePlan.length; i++) {
          // this.idArray.push(response.data.resourcePlan[i].resourceID);
          // this.powerArray.push(this.apiData.resourcePlan[i].powerGeneration);
          // }
          this.formatData();
            },
             errorCallback: function(response) {
        this.apiData = response.data;
       
      },
      formatData: function() {

            
            for (var i = 0; i < this.apiData.resourcePlan.length; i++) {
          this.idArray.push(this.apiData.resourcePlan[i].resourceID);
           this.powerArray.push(this.apiData.resourcePlan[i].powerGeneration);
            }
            var Combined = new Array(this.powerArray.length + 1);
            var initial = ['Hour'];
            for (var k = 0; k < this.idArray.length; k++) {
              initial.push('#' + this.idArray[k]);
            }
              this.final.push(initial);
                  for (var j = 0; j < 24; j++){
                    var current = [new Date(0,0,0,j,0,0).getUTCHours()];
                    for (var i = 0; i < this.idArray.length; i++) {
                      current.push(this.powerArray[i][j]);
                    }
                  this.final.push(current);
                  }
                  
      } 
          

          
      },
     
     

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
