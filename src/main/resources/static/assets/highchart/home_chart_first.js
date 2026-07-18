Highcharts.chart('riskcheck_graph', {
    chart: {
        type: 'pie',
         //marginTop: -100
		 spacingBottom: 1,
	        spacingTop: 1,
	        spacingLeft: 10,
	        spacingRight: 10,
    },
    title: {
        text: null
    },
   
    plotOptions: {
      
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
			  colors: ['#61C9A8','#CC6A5D'],
			        innerSize: '50%',
            startAngle: 0,
            endAngle: 360,
           // center: ['50%', '75%']
		   showInLegend: true
        }
    },
	exporting: {enabled: false},
    series: [{
        name: 'Delivered amount',
        data: [
            ['Compliant Sites', 365],
            ['Non-Compliant Sites', 527]            
        ]
    }]
});