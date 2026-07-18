var data1=[{y:10,color:'#61C9A8'}, {y:12,color:'#f19953'}, {y:9,color:'#996f8a'}, {y:7,color:'#fe5f55'}, {y:11,color:'#98c4ff'}, {y:15,color:'#d69673'}, {y:13,color:'#ace8d4'}, {y:17,color:'#302d7c'}, {y:20,color:'#ffb288'}, {y:18,color:'#d58e88'}];

var h=Highcharts.chart('chart_seven', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Fire', 'Elevator', 'Fall', 'Safe', 'Electrical', 'Lockout', 'Confined', 'Contractor', 'Asbestos', 'Mould']
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
        align: 'center',
        verticalAlign: 'top',
        y: -25,
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



