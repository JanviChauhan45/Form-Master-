
Highcharts.chart('operator_wise_data', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    exporting: {
        enabled: false
    },
    xAxis: {
        title: {
            enabled: false,
            text: 'Telecome Operator'
        },
        categories: [
            'Aircel',
            'Airtel',
            'BSNL',
            'Idea',
            'Jio',
            'MTNL',
            'Tata Docomo',
            'Vodafone'
        ]
    },
    yAxis: {
        title: {
            text: 'Data Usage'
        }
    },
    legend: {
        align: 'center',
        verticalAlign: 'top',
        y: -25,
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 6,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.y:.1f} kb'
            }
        }
    },
    series: [{
        name: 'Whatsapp',
        color: '#F7241C',
        data: [[453], [233], [123], [463], [423],
            [564], [345], [523]]

    }, {
        name: 'Paytm',
        color: '#33AC61',
        data: [[674], [775], [112], [673], [782],
            [834], [893], [734]]
    }, {
        name: 'Instagram',
        color: '#FF9932',
        data: [[745], [634], [634], [722], [867],
            [834], [764], [734]]
    }, {
        name: 'Redbus',
        color: '#C320EE',
        data: [[233], [134], [193], [233], [234],
            [154], [140], [184]]
    }, {
        name: 'Snapchat',
        color: '#0065EC',
        data: [[674], [453], [233], [122], [563],
            [278], [266], [234]]
    }]
});

