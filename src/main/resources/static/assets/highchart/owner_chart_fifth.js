var data1=[{y:16,color:'#5b9bd5'},
           {y:4,color:'#7f83b3'}, 
           {y:4,color:'#8cc1a5'}, 
           {y:3,color:'#a9d6eb'},
           {y:3,color:'#6ea8d6'},
           {y:3,color:'#2d69a8'},
           {y:1,color:'#ed7d31'},
           {y:1,color:'#45a88b'}
          ];
stdCharFunc();

function stdCharFunc(){
    Highcharts.chart('building_chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Blackwood Partners Corporation', 'Morguard', 'Redbourne Group', 'Real Estate 360', 'Triovest', 'Vertica', 'Realstar', 'Strathallen']
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
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
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
        bar: {
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
}