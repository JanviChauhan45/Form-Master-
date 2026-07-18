
var chartDonut = Highcharts.chart('container_donut', {
    chart: {
        spacingBottom: 1,
        spacingTop: 1,
        spacingLeft: 10,
        spacingRight: 10
    },
    title: {
        text: ''
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Categorywise Data Consumption',
        innerSize: '50%',
        data: [
            ['Phone', 921.93],
            ['Communication', 653.52],
            ['Video', 230.45],
            ['Social', 635.78],
            ['Tool', 325.42],
            ['Game', 784.45],
            ['Other', 336.78],
            ['Browser', 163.23],
            ['Music', 634.12],
            ['Education', 239.09],
            ['Photography', 223.09],
            {
                name: 'Other',
                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});


$(document).on('click','#donutviewId',function () {
    if($('#donutviewId').find('i').hasClass('ft-maximize')){
        chartDonut = Highcharts.chart('container_donut', {
            chart: {
                spacingBottom: 1,
                spacingTop: 1,
                spacingLeft: 10,
                spacingRight: 10
            },
            title: {
                text: ''
            },
            exporting: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Categorywise Data Consumption',
                innerSize: '50%',
                data: [
                    ['Phone', 921.93],
                    ['Communication', 653.52],
                    ['Video', 230.45],
                    ['Social', 635.78],
                    ['Tool', 325.42],
                    ['Game', 784.45],
                    ['Other', 336.78],
                    ['Browser', 163.23],
                    ['Music', 634.12],
                    ['Education', 239.09],
                    ['Photography', 223.09],
                    {
                        name: 'Other',
                        y: 7.61,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        });
    }else{
        chartDonut.setSize(1340,550, false);
        chartDonut.zoomOut(0.8);
    }

});
