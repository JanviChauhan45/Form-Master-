var data1=[{y:100,color:'#000000'}, {y:85,color:'#00284d'}, {y:60,color:'#004f99'}, {y:90,color:'#0076e1'}, {y:105,color:'#339cff'}, {y:85,color:'#99ceff'},{y:100,color:'#000000'}, {y:85,color:'#00284d'}, {y:60,color:'#004f99'}, {y:90,color:'#0076e1'}, {y:105,color:'#339cff'}, {y:85,color:'#99ceff'}];

var d=Highcharts.chart('performance_chart', {
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
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December']
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


