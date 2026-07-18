var h = Highcharts.chart('asset_chart', {
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
                        $(".buildingassetmodal").modal("show");
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
            name: "Building Assets",
            colorByPoint: true,
            data: [
                {
                    name: "Triovest",
                    y: 58
                },
                {
                    name: "CBRE(HOOPP)",
                    y: 25
                },
                {
                    name: "Canderel",
                    y: 23
                },
                {
                    name: "Morguard",
                    y: 17
                },
                {
                    name: "GWL",
                    y: 11
                },
                {
                    name: "Cushman",
                    y: 9
                },
                {
                    name: "Kennington",
                    y: 8
                },
                {
                    name: "Menkes",
                    y: 3
                },
                {
                    name: "Montez",
                    y: 2
                }
            ]
        }
    ]
});