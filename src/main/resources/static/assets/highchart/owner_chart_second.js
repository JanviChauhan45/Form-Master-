Highcharts.chart('outstanding_graph', {
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
			  colors: ['#61C9A8','#F19953', '#996F8A'],
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
            ['Overdue', 9],
            ['New', 0],
            ['Deferred', 3]
        ]
    }]
});