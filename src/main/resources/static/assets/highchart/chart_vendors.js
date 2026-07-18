var s=Highcharts.chart('chart_vendors', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        },
		 spacingBottom: 1,
	        spacingTop: 1,
	        spacingLeft: 10,
            spacingRight: 10,
            backgroundColor:'transparent'
    },
    title: {
        text: '112',
        align: 'center',
        verticalAlign: 'middle',
        y: -5
    },
   
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45,
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
			  colors: ['#61C9A8','#F19953', '#CC6A5D'],
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
            ['Verified', 54],
            ['In Progress', 39],
            ['Failed', 19]
        ]
    }]
});