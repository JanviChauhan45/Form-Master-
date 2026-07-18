var j = Highcharts.chart('portfolio_chart', {
    chart: {
        type: 'bar',
        spacingBottom: 10,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        backgroundColor:'transparent'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        }

    },
    exporting: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            },
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        $(".portfolioviewmodal").modal("show");
                    }
                }
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>'
    },

    series: [
        {
            name: "Portfolio Info",
            // colorByPoint: true,
            data: [
                {
                    name: "No. of Clients",
                    y: 19
                },
                {
                    name: "No. of Sites",
                    y: 39
                },
                {
                    name: "No. of Buildings",
                    y: 60
                },
                {
                    name: "Scheduled Audits",
                    y: 40
                },
                {
                    name: "Need to be Scheduled",
                    y: 15
                },
                {
                    name: "Waiting to be Rescheduled",
                    y: 10
                }
            ]
        }
    ]
});