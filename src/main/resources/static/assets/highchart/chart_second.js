var a=Highcharts.chart('greencheck_graph', {
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
        // y: -15
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
                colors: ['#CC6A5D', '#4eb7eb', '#91e301', '#f9bc0b'],
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
        name: 'Action Reports',
        data: [
            ['New', 39],
            ['Deferred', 34],
            ['Reissued', 45],
            ['Overdue', 26]
        ]
    }]
});