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
    const color1 = "hsl(10, 79%, 65%)" ;
    const color2 = "hsl(186, 34%, 60%)" ;
    const barColors = [color1, color1, color2, color1, color1, color1, color1];
   
    
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
