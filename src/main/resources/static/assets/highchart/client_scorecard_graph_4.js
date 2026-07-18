var data1=[{y:30,color:'#4eb7eb'}, {y:15,color:'#4eb7eb'}, {y:10,color:'#4eb7eb'}, {y:20,color:'#4eb7eb'}];

var d=Highcharts.chart('scorecard_graph', {
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
        categories: ['Building 1', 'Building 2', 'Building 3', 'Building 4']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        stackLabels: {
            enabled: true,
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b> ',
        pointFormat: '{point.y}'
    },
    plotOptions: {
//        column: {
//            stacking: 'normal',
//        }
        column: {
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'PBT',
        data: data1,
        color: '#a5a5a5',
        showInLegend: false ,
        lang: {
        thousandsSep: ','
        }
    }]
});



