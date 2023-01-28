
 // Graph
 
// Get the canvas element
var bct = document.getElementById('myBarChart').getContext('2d');
var pct = document.getElementById('myPieChart').getContext('2d');
var dct = document.getElementById('myDChart').getContext('2d');

var cd = [11, 24, 13, 84, 25];
colors=[];
for(let i=0;i<this.cd.length;i++){
  this.colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
}
// Create the chart
var data =  {
    type: 'line',
     
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'My Data',
            data: cd,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }],

    };

    var    options = {
      maintainASpectionRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }, 
      legend: {
          labels:{
              fontSize: 14
          }
      }
    }
    
var bchart = new Chart(bct, {
  type: 'bar',
  data: data,
  options: options
});    


var pchart = new Chart(pct, {
  type: 'line',
  data: data,
  backgroundColor: this.colors,
  options: options
});    

var dchart = new Chart(dct, {
  type: 'doughnut',
  data: data,
  backgroundColor: this.colors,
  options: options
});