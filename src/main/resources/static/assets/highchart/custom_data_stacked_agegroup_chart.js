
/*Highcharts.chart('stacked', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['M 15-17', 'M 18-21', 'M 22-25', 'M 26-30', 'M 31-35']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Data Usage'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
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
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
        }
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
    }]
});*/




/*
Highcharts.chart('stacked_nccs', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['A1', 'A2', 'A3', 'B1', 'B2' , 'C1', 'C2', 'D1', 'D2', 'E1']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Data Usage'
        },
        stackLabels: {
            enabled: true,
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
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
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
        }
    },
    series: [{
        name: 'Wifi',
        data: [5345, 3234, 4234, 7562, 2672, 4522, 1894, 1893, 2784, 4527],
        color: '#0065EC'
    }, {
        name: 'Cellular',
        data: [2903, 2782, 3894, 3289, 5623, 4537, 7823, 5637, 7356 , 6745],
        color: '#FF9932'
    }]
});*/



Highcharts.chart('stacked', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'M 15-17',
            'M 18-21',
            'M 22-25',
            'M 26-30',
            'M 31-35',
            'M 36-40',
            'M 41-50',
            'M 51-60',
            'F 15-17',
            'F 18-21',
            'F 22-25',
            'F 26-30',
            'F 31-35',
            'F 36-40',
            'F 41-50',
            'F 51-60'
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
        name: 'Average Time Spent',
        data: [4934, 7145, 5062, 6295, 3448, 4769, 5352, 6481, 2164, 7941, 4934, 7145, 5062, 6295, 3448, 4769],
        color: '#0065EC'

    }, {
        name: 'Average Data Usage',
        data: [8316, 4788, 5985, 5934, 6860, 2845, 4050, 2043, 6912, 3835, 8316, 4788, 5985, 5934, 6860, 2845],
        color: '#FF4087'

    }]
});