var d=Highcharts.chart('chart_fourth', {
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
                colors: ['#61C9A8','#CC6A5D', '#F19953', '#996F8A'],
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
            ['Other', 28],
            ['Deferred ARs', 24]
        ]
    }]
});