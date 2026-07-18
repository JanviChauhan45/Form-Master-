var categories = [
    '51-60', '41-50', '36-40', '31-35',
    '26-30', '22-25', '18-21', '15-17'
];

var chartPyramid = Highcharts.chart('container_pyramid', {
    chart: {
        type: 'bar',
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
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    },
        { // mirror axis on right side
        opposite: false,
        reversed: false,
        categories: categories
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
    },
    series: [{
        name: 'Male',
        data: [
            -2.2, -2.1, -2.2, -2.4,
            -2.7, -3.0, -3.3, -3.2
        ]
    }, {
        name: 'Female',
        data: [
            2.1, 2.0, 2.1, 2.3, 2.6,
            2.9, 3.2, 3.1
        ]
    }]
});

$(document).on('click','#pyramidviewId',function () {
    if($('#pyramidviewId').find('i').hasClass('ft-maximize')){
        chartPyramid = Highcharts.chart('container_pyramid', {
            chart: {
                type: 'bar',
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
            subtitle: {
                text: ''
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            },
                { // mirror axis on right side
                    opposite: false,
                    reversed: false,
                    categories: categories
                }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                name: 'Male',
                data: [
                    -2.2, -2.1, -2.2, -2.4,
                    -2.7, -3.0, -3.3, -3.2
                ]
            }, {
                name: 'Female',
                data: [
                    2.1, 2.0, 2.1, 2.3, 2.6,
                    2.9, 3.2, 3.1
                ]
            }]
        });
    }else{
        chartPyramid.setSize(1340,550, false);
        chartPyramid.zoomOut(0.8);
    }

});