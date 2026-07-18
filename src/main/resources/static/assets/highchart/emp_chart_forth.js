var data1=[{y:25,color:'#61C9A8'}, {y:13,color:'#f19953'}, {y:15,color:'#996f8a'}, {y:20,color:'#fe5f55'}];

var d=Highcharts.chart('emp_graph4', {
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
        categories: ['Assessment Scheduled', 'Assessment Completed', 'Report To QA', 'Report To Client']
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



