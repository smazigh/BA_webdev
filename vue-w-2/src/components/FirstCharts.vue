<template>
 <GChart
    type="CalendarChart"
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
    array1: Array,
    array2: Array,
    isStack: Boolean
  }, 
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: this.array1,
      chartOptions: {
        
  isStacked: this.isStack,
  title: "First Success"        
      }
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
