var l = Highcharts.chart('timesheet_chart', {
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
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Client Work',
            'Admin Work',
            'Communications'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:12px;font-weight:700">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0;font-size:11px;font-weight:600">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'GWL',
        data: [4, 5, 3],
        color: 'rgba(0, 122, 195)'

    }, {
        name: 'CF',
        data: [6, 4, 4],
        color: 'rgba(221, 128, 15)'

    }, {
        name: 'BMO',
        data: [5, 3, 5],
        color: 'rgba(174, 174, 174)'

    }]
});