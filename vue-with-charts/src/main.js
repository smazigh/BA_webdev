import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleCharts from 'vue-google-charts'

Vue.config.productionTip = false
Vue.use(VueGoogleCharts)

var mainVue =new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')

var mainVue = new Vue({
  el: '#simpleApp',
  created() {
     this.loadApi();
    },
  data: {
      someText: 'Hello',
      apiData: undefined,
      powerArray: [],
      idArray: new Array()
  }, 
  methods: {
      loadApi: function() {
          this.$http.get('https://api.myjson.com/bins/1gkfcj').then(this.successCallback, this.errorCallback);

      },
      successCallback: function (response) {
          this.apiData = response.data;
          console.log('response:', this.apiData);
          for (var i = 0; i < this.apiData.resourcePlan.length; i++) {
          Vue.set(this.idArray, i, parseInt(this.apiData.resourcePlan[i].resourceID));
          Vue.set(this.powerArray, i, this.apiData.resourcePlan[i].powerGeneration);
          console.log(this.idArray[i]);
            }
          

          
      },
      errorCallback: function(response) {
          console.log('Error response:', response);
      }
     


  }
});