var c=Highcharts.chart('chart_three', {
    chart: {
        type: 'pie',
        spacingBottom: 10,
        spacingTop: 10,
        spacingLeft: 0,
        spacingRight: 0,
        backgroundColor:'transparent'
    },
    title: {
        text: ''
        // align: 'center',
        // verticalAlign: 'middle',
        // y: -5
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.y}',
                distance: 5,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            },
                colors: ['#CC6A5D','#f9bc0b'],
			        innerSize: '80%',
            startAngle: 0,
            endAngle: 360,
		   showInLegend: true
        }
    },
    legend: {
        enabled: false
    },
    
	exporting: {enabled: false},
    series: [{
        name: '',
        data: [
            ['New', 23],
            ['Overdue', 29]
        ]
    }]
});