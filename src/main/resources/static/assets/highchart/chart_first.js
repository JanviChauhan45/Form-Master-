var a=Highcharts.chart('riskcheck_graph', {
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
                colors: ['#4A9658', '#FE5F55', '#3095B4', '#F48248', '#996F8A'],
                innerSize: '80%',
                startAngle: 0,
                endAngle: 360,
                showInLegend: true,
                point: {
                events: {
                    click: function () {
                        $(".arstatusdetails").modal("show");
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
        name: 'Action Reports',
        data: [
            ['New', 30],
            ['Overdue', 25],
            ['Deferred', 20],
            ['Work In Progress', 35],
            ['Reissued', 40]
        ]
    }]
});