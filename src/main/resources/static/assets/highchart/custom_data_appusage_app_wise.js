
Highcharts.chart('app_wise_performance', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Whatsapp',
            'Amazon',
            'Facebook',
            'Flipkart',
            'Zomato',
            'Cricbuzz',
            'Redbus',
            'Paytm',
            'Phonepe',
            'Snapdeal'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Data Usage'
        }
    },
    legend: {
        align: 'center',
        verticalAlign: 'top',
        y: -25,
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
    series: [{
        name: 'Average Data Usage',
        data: [4934, 7145, 5062, 6295, 3448, 4769, 5352, 6481, 2164, 7941],
        color: '#8332FF'

    }, {
        name: 'Average Time Spent',
        data: [8316, 4788, 5985, 5934, 6860, 2845, 4050, 2043, 6912, 3835],
        color: '#FF4087'

    }]
});