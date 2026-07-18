$(function () {

    var ugly = ['', '', '', '',  ''];
    var cats = ugly.concat(ugly).concat(ugly).concat(ugly).concat(ugly);
    var zeroes = [];
    cats.forEach(function () {zeroes.push(0);});
    var options = {

        chart: {
            type: 'column'
        },

        title: {
            text: ''
        },

        xAxis: [

            {
                categories: cats,
                labels: {autoRotation:false, style: {textOverflow: 'none'}},
                tickWidth: 0,
            },
            {
                categories: ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1'],


                //     plotBands : [ {  from:-0.5, to:0.5, color:"#eeeeee"  },
                //                   {  from: 1.5, to:2.5, color:"#eeeeee"  },
                //                    {  from: 3.5, to:4.5, color:"#eeeeee"  }]
            }     ,
        ],

        yAxis: {
            allowDecimals: false,
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
            formatter: function () {

                return '<b>' + this.series.options.stack +  ' : ' + this.x +  '</b><br/>' +
                    this.series.name + ': ' + this.y;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'Average Data Usage',
            color: '#FF9932',
            data: [5, 3, 4, 7, 2, 23, 12, 34, 45, 12],
            stack: 'Metrices 1',
            xAxis: 1

        }, {
            name: 'Average Time Spent',
            color: '#8332FF',
            data: [3, 14, 14, 12, 5, 23, 20, 12, 18, 11],
            stack: 'Metrices 1',
            xAxis: 1

        }, {
            name: 'Average Data Usage',
            color: '#FF9932',
            data: [2, 6, 2, 1, 14, 14, 12, 12, 18, 11],
            showInLegend: false,
            stack: 'Metrices 2',
            xAxis: 1
        }, {
            name: 'Average Time Spent',
            data: [3, 4, 4, 3, 3, 4, 7, 2, 23, 12],
            color: '#8332FF',
            showInLegend: false,
            stack: 'Metrices 2',
            xAxis: 1
        }]
    };

    var onLegendClick= function (event) {
        var myname = this.name;
        var myvis  = !this.visible;
        this.chart.series.forEach( function (elem) {
            if (elem.name == myname) {
                elem.setVisible(myvis);
            }
        });
        return false;
    }


    options.series.forEach(function (serie) {
        serie.events = { legendItemClick : onLegendClick} ;
    });
    $('#stacked_nccs').highcharts(options);
});




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
