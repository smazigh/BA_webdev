google.charts.load('current', {packages: ['corechart']});
function drawChart() {
    // Define the chart to be drawn.
    console.log('Arrays: ', mainVue.idArray);
    var data = google.visualization.arrayToDataTable([['Hello', 'Morining', 'Nouh'], document.getElementById('container').innerHtml = mainVue.idArray]);
    

    var options = {title: 'Population (in millions)', isStacked:true};  

    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('container'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);     





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