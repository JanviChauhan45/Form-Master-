
Highcharts.chart('heatmap', {
    colorAxis: {
        minColor: '#FFFFFF',
        maxColor: '#0065EC'
    },
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
            name: 'Whatsapp',
            value: 9798,
            colorValue: 7
        }, {
            name: 'Facebook',
            value: 9389,
            colorValue: 6
        }, {
            name: 'Flipkart',
            value: 8894,
            colorValue: 5
        }, {
            name: 'Instagram',
            value: 8567,
            colorValue: 4
        }, {
            name: 'Paytm',
            value: 8239,
            colorValue: 3
        }, {
            name: 'Phonepe',
            value: 6734,
            colorValue: 2
        }, {
            name: 'Hike',
            value: 6120,
            colorValue: 1
        }]
    }],
	exporting: {
        enabled: false
    },
    title: {
        text: ''
    }
});