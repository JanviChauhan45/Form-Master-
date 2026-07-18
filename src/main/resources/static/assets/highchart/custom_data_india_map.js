var data = [
    ['in-5390', 0],
    ['in-py', 1],
    ['in-ld', 2],
    ['in-an', 3],
    ['in-wb', 4],
    ['in-or', 5],
    ['in-br', 6],
    ['in-sk', 7],
    ['in-ct', 8],
    ['in-tn', 9],
    ['in-mp', 10],
    ['in-2984', 11],
    ['in-ga', 12],
    ['in-nl', 13],
    ['in-mn', 14],
    ['in-ar', 15],
    ['in-mz', 16],
    ['in-tr', 17],
    ['in-3464', 18],
    ['in-dl', 19],
    ['in-hr', 20],
    ['in-ch', 21],
    ['in-hp', 22],
    ['in-jk', 23],
    ['in-kl', 24],
    ['in-ka', 25],
    ['in-dn', 26],
    ['in-mh', 27],
    ['in-as', 28],
    ['in-ap', 29],
    ['in-ml', 30],
    ['in-pb', 31],
    ['in-rj', 32],
    ['in-up', 33],
    ['in-ut', 34],
    ['in-jh', 35]
];

// Create the chart
var chartMapIndia = Highcharts.mapChart('container', {
    chart: {
        map: 'countries/in/custom/in-all-andaman-and-nicobar',
        spacingBottom: 1,
        spacingTop: 1,
        spacingLeft: 10,
        spacingRight: 10,
        events: {
            load: function () {
                this.mapZoom(0.2);
            }
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    mapNavigation: {
        enabled: false,
        buttonOptions: {
            verticalAlign: 'left'
        }
    },
    colorAxis: {
        min: 0
    },
    exporting: {
        enabled: false
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'bottom'
    },
    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

$(document).on('click','#mapviewId',function () {
    if($('#mapviewId').find('i').hasClass('ft-maximize')){
        chartMapIndia = Highcharts.mapChart('container', {
            chart: {
                map: 'countries/in/custom/in-all-andaman-and-nicobar',
                spacingBottom: 1,
                spacingTop: 1,
                spacingLeft: 10,
                spacingRight: 10,
                events: {
                    load: function () {
                        this.mapZoom(0.2);
                    }
                }
            },

            title: {
                text: ''
            },

            subtitle: {
                text: ''
            },

            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'left'
                }
            },

            colorAxis: {
                min: 0
            },
            exporting: {
                enabled: false
            },

            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'bottom'
            },

            series: [{
                data: data,
                name: 'Random data',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }]
        });
    }else{
        chartMapIndia.setSize(1340,550, false);
        chartMapIndia.zoomOut(0.8);
    }

});
