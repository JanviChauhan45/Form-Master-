Highcharts.chart('kpm_chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Fire Safety', 'Safeguarding Machinery', 'Confined Spaces', 'Enclosed Areas - Quebec', 'Fall Prevention'],
        customdata: ['Fire Safety HAHA', 'Safeguarding Machinery HAHA', 'Confined Spaces HAHA', 'Enclosed Areas - Quebec', 'Fall Prevention HAHA']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: false,
        enabled:false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Other',
        data: [11, 2, 1, 1, 1]
    }, {
        name: 'High Risk',
        data: [4, 0, 1, 1, 0]
    }]
});