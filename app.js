setInterval(function(){   
    humedad.textContent=(Math.floor((Math.random()*100)+1)); 
    temperatura.textContent=(Math.floor((Math.random()*100)+1));
    co2.textContent=(Math.floor((Math.random()*100)+1));
    myChart.data.datasets.data=[3,3,3,3,3,3];
 }, 1000);


var ctx = document.getElementById('myChart').getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['1pm', '2pm', '3pm', '4pm', '6pm', '7pm'],
         datasets: [{
             label: 'Data',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero: true
                 }
             }]
         }
     }
 });
