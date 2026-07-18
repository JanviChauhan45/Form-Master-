var d=Highcharts.chart('kpm_graph', {
    colors: ['#ff9999','#535e6b','#8AC7DB'],
    chart: {
        type: 'column',
        spacingBottom: 0,
        spacingTop: 10,
        spacingLeft: 0,
        spacingRight: 0,
        backgroundColor:'transparent'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Fire', 'Elevator', 'Fall', 'Safe', 'Electrical', 'Lockout', 'Spaces', 'Contractor', 'Asbestos', 'Mould']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'High',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 3, 3],
        events: {
            click: function () {
                $(".kpmmodal").modal("show");
            }
        }
    }, {
        name: 'Medium',
        data: [3, 4, 5, 5, 5, 3, 4, 4, 5, 4],
        events: {
            click: function () {
                $(".kpmmodal").modal("show");
            }
        }
    }, {
        name: 'Low',
        data: [2, 2, 3, 2, 4, 2, 2, 3, 4, 5],
        events: {
            click: function () {
                $(".kpmmodal").modal("show");
            }
        }
    }]
});