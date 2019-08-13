<template>
 <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'FirstCharts',
  components: {
    GChart
  },
  props: {
    jsonUrl: String
  }, 
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['this.idArray[0]','this.idArray[1]','this.idArray[2]', 'test'],
        ['2014', parseInt(this.idArray[0]), 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Power Generation',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
      idArray: [],
      powerArray: []
    }
    }, 
    methods: {



    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
