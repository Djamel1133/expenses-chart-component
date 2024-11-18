
document.addEventListener('DOMContentLoaded', function() {
 
  fetch('./script/data.json')
    .then(response => response.json())
    .then(data => {
      const xValues = data.map(item => item.day);
      const yValues = data.map(item => item.amount);
      displayChart(xValues, yValues);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

  function displayChart(xValues, yValues) {
    /* get max of amount values (yvalues array) and color it with different color */     
    const barColors = yValues.map(value => 
      value === Math.max(...yValues) ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)" );
    
    const ctx = document.getElementById('chart-container').getContext('2d');
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          title:  { display: false,       },
          legend: { display: false        } ,

        tooltip: {
          backgroundColor: 'hsl(25, 47%, 15%)',
          displayColors: false, // disable colored square for tooltip
          caretSize: 0 , //
        
          callbacks: {
            title: function(tooltipItem, data) {
              return ''; // Remove the day label (x-value)
            },
            label: function(tooltipItem, data) {
              return tooltipItem.raw; // show only the value
              }
            }}
        } ,

        scales: { 
          x: { display: true,
               grid: { display: false }},
          y: {
            display: false,   
            grid: { display: false }}
        }
      }
    } 
  ); 
};

// font style
Chart.defaults.font.family = 'DM Sans, sans-serif';  
Chart.defaults.font.size = 12;                    
Chart.defaults.font.weight = 'bold';              
}
) ;
