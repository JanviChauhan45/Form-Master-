var c=Highcharts.chart('chart_questions', {
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
            colors: ['#4A9658', '#FE5F55'],
            innerSize: '80%',
            startAngle: 0,
            endAngle: 360,
            showInLegend: true,
            point: {
                events: {
                    click: function () {
                        $(".questionstatusdetails").modal("show");
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
        name: 'Questions',
        data: [
            ['New', 93],
            ['Overdue', 56]
        ]
    }]
});