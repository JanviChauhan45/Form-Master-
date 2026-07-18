var c=Highcharts.chart('emp_graph3', {
    chart: {
        type: 'pie',
        spacingBottom: 0,
        spacingTop: 0,
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
                colors: ['#61C9A8','#CC6A5D', '#996f8a'],
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
            ['Industrial', 32],
            ['Residence', 19],
            ['Office', 26]
        ]
    }]
});