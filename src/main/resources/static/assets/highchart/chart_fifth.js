var f=Highcharts.chart('chart_fifth', {
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
                colors: ['#61C9A8','#CC6A5D'],
			        innerSize: '80%',
            startAngle: 0,
            endAngle: 360,
            showInLegend: true,
            point: {
                events: {
                    click: function () {
                        $(".assetclassdetails").modal("show");
                    }
                }
            }
        }
    },
    legend: {
        enabled: false
    },
	exporting: {enabled: false},
    series: [{
        name: 'Assets',
        data: [
            ['Industrial Asset', 32],
            ['Office Asset', 26]
        ]
    }]
});