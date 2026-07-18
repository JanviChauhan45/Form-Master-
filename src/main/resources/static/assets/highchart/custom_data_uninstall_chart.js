
Highcharts.chart('uninstall', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'More Uninstalled Applications'
    },
    xAxis: {
        categories: [
            'Whastapp',
            'Paytm',
            'Amazon',
            'Flipkart',
            'Hike',
            'Hotstar',
            'Redbus',
            'Zomata',
            'Swiggy',
            'Instagram'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'App Usage'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} gb</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'App Usage',
        showInLegend: false,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1],
        color: '#29A7FF'

    }]
});