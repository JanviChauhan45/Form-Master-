Highcharts.chart('asset_graph', {
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
			  colors: ['#a9d6eb','#67aae1', '#175aa0', '#8081b9'],
			        innerSize: '50%',
            startAngle: 0,
            endAngle: 360,
           // center: ['50%', '75%']
		   showInLegend: true
        }
    },
    legend: {
    useHTML: true, 
    labelFormatter: function() {    
    return '<p class="mb-0">'+this.name+'-'+this.y+'</p>';
    }
    },
	exporting: {enabled: false},
    series: [{
        name: '',
        data: [
            ['Industrial', 13],
            ['Residential', 7],
            ['Office', 12],
            ['Retail', 3]
        ]
    }]
});