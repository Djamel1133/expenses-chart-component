document.addEventListener('DOMContentLoaded', function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const xValues = data.map(item => item.day);
      const yValues = data.map(item => item.amount);
      displayChart(xValues, yValues);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

  function displayChart(xValues, yValues) {
    /* get max of value and color it with diffrent color */     
    const barColors = yValues.map(value => 
      value === Math.max(...yValues) ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)" );
    
    new Chart(document.getElementById('chart-container'), {
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
          legend: { display: false        }
        },
        scales: { 
          x: { display: true,
               grid: { display: false }},
          y: {
            display: false,   
            grid: { display: false }}
        }
      }
    });
};
}) ;
