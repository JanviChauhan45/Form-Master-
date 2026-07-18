var chartbar = Highcharts.chart('container_drilldown', {
    chart: {
        type: 'column',
        spacingBottom: 1,
        spacingTop: 5,
        spacingLeft: 10,
        spacingRight: 10
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category'
    },
    exporting: {
        enabled: false
    },
    yAxis: {
        title: {
            text: ''
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [
        {
            "name": "Day Time",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Late Night",
                    "y": 62.74,
                    "drilldown": "Late Night"
                },
                {
                    "name": "Dead Band",
                    "y": 10.57,
                    "drilldown": "Dead Band"
                },
                {
                    "name": "Early Morning",
                    "y": 7.23,
                    "drilldown": "Early Morning"
                },
                {
                    "name": "Morning",
                    "y": 5.58,
                    "drilldown": "Morning"
                },
                {
                    "name": "Afternoon Prime",
                    "y": 4.02,
                    "drilldown": "Afternoon Prime"
                },
                {
                    "name": "Evening",
                    "y": 1.92,
                    "drilldown": "Evening"
                },
                {
                    "name": "Prime Time",
                    "y": 7.62,
                    "drilldown": null
                }
            ]
        }
    ],
    "drilldown": {
        "series": [
            {
                "name": "Late Night",
                "id": "Late Night",
                "data": [
                    [
                        "0.0",
                        0.1
                    ],
                    [
                        "0.50",
                        1.3
                    ],
                    [
                        "1.00",
                        53.02
                    ],
                    [
                        "1.50",
                        1.4
                    ]
                ]
            },
            {
                "name": "Dead Band",
                "id": "Dead Band",
                "data": [
                    [
                        "2.00",
                        1.02
                    ],
                    [
                        "2.50",
                        7.36
                    ],
                    [
                        "3.00",
                        0.35
                    ],
                    [
                        "3.50",
                        0.11
                    ],
                    [
                        "4.00",
                        0.1
                    ],
                    [
                        "4.50",
                        0.95
                    ],
                    [
                        "5.00",
                        0.15
                    ],
                    [
                        "5.50",
                        0.1
                    ]
                ]
            },
            {
                "name": "Early Morning",
                "id": "Early Morning",
                "data": [
                    [
                        "6.00",
                        6.2
                    ],
                    [
                        "6.50",
                        0.29
                    ],
                    [
                        "7.00",
                        0.27
                    ],
                    [
                        "7.50",
                        0.47
                    ],
                    [
                        "8.00",
                        0.198
                    ],
                    [
                        "8.50",
                        0.245
                    ],
                    [
                        "9.00",
                        0.204
                    ],
                    [
                        "9.50",
                        0.171
                    ]
                ]
            },
            {
                "name": "Morning",
                "id": "Morning",
                "data": [
                    [
                        "10.00",
                        3.39
                    ],
                    [
                        "10.50",
                        0.96
                    ],
                    [
                        "11.00",
                        0.36
                    ],
                    [
                        "11.50",
                        0.54
                    ],
                    [
                        "12.00",
                        0.13
                    ],
                    [
                        "12.50",
                        0.2
                    ]
                ]
            },
            {
                "name": "Afternoon Prime",
                "id": "Afternoon Prime",
                "data": [
                    [
                        "13.00",
                        2.6
                    ],
                    [
                        "13.50",
                        0.92
                    ],
                    [
                        "14.00",
                        0.4
                    ],
                    [
                        "14.50",
                        0.19
                    ],
                    [
                        "15.00",
                        0.24
                    ],
                    [
                        "15.50",
                        0.76
                    ]
                ]
            },
            {
                "name": "Evening",
                "id": "Evening",
                "data": [
                    [
                        "16.00",
                        0.96
                    ],
                    [
                        "16.50",
                        0.82
                    ],
                    [
                        "17.00",
                        0.14
                    ],
                    [
                        "17.50",
                        0.184
                    ],
                    [
                        "18.00",
                        0.143
                    ],
                    [
                        "18.50",
                        0.193
                    ]
                ]
            }
        ]
    }
});

$(document).on('click','#barviewId',function () {
    if($('#barviewId').find('i').hasClass('ft-maximize')){
        chartbar = Highcharts.chart('container_drilldown', {
            chart: {
                type: 'column',
                spacingBottom: 1,
                spacingTop: 5,
                spacingLeft: 10,
                spacingRight: 10
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            exporting: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ''
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            "series": [
                {
                    "name": "Day Time",
                    "colorByPoint": true,
                    "data": [
                        {
                            "name": "Late Night",
                            "y": 62.74,
                            "drilldown": "Late Night"
                        },
                        {
                            "name": "Dead Band",
                            "y": 10.57,
                            "drilldown": "Dead Band"
                        },
                        {
                            "name": "Early Morning",
                            "y": 7.23,
                            "drilldown": "Early Morning"
                        },
                        {
                            "name": "Morning",
                            "y": 5.58,
                            "drilldown": "Morning"
                        },
                        {
                            "name": "Afternoon Prime",
                            "y": 4.02,
                            "drilldown": "Afternoon Prime"
                        },
                        {
                            "name": "Evening",
                            "y": 1.92,
                            "drilldown": "Evening"
                        },
                        {
                            "name": "Prime Time",
                            "y": 7.62,
                            "drilldown": null
                        }
                    ]
                }
            ],
            "drilldown": {
                "series": [
                    {
                        "name": "Late Night",
                        "id": "Late Night",
                        "data": [
                            [
                                "0.0",
                                0.1
                            ],
                            [
                                "0.50",
                                1.3
                            ],
                            [
                                "1.00",
                                53.02
                            ],
                            [
                                "1.50",
                                1.4
                            ]
                        ]
                    },
                    {
                        "name": "Dead Band",
                        "id": "Dead Band",
                        "data": [
                            [
                                "2.00",
                                1.02
                            ],
                            [
                                "2.50",
                                7.36
                            ],
                            [
                                "3.00",
                                0.35
                            ],
                            [
                                "3.50",
                                0.11
                            ],
                            [
                                "4.00",
                                0.1
                            ],
                            [
                                "4.50",
                                0.95
                            ],
                            [
                                "5.00",
                                0.15
                            ],
                            [
                                "5.50",
                                0.1
                            ]
                        ]
                    },
                    {
                        "name": "Early Morning",
                        "id": "Early Morning",
                        "data": [
                            [
                                "6.00",
                                6.2
                            ],
                            [
                                "6.50",
                                0.29
                            ],
                            [
                                "7.00",
                                0.27
                            ],
                            [
                                "7.50",
                                0.47
                            ],
                            [
                                "8.00",
                                0.198
                            ],
                            [
                                "8.50",
                                0.245
                            ],
                            [
                                "9.00",
                                0.204
                            ],
                            [
                                "9.50",
                                0.171
                            ]
                        ]
                    },
                    {
                        "name": "Morning",
                        "id": "Morning",
                        "data": [
                            [
                                "10.00",
                                3.39
                            ],
                            [
                                "10.50",
                                0.96
                            ],
                            [
                                "11.00",
                                0.36
                            ],
                            [
                                "11.50",
                                0.54
                            ],
                            [
                                "12.00",
                                0.13
                            ],
                            [
                                "12.50",
                                0.2
                            ]
                        ]
                    },
                    {
                        "name": "Afternoon Prime",
                        "id": "Afternoon Prime",
                        "data": [
                            [
                                "13.00",
                                2.6
                            ],
                            [
                                "13.50",
                                0.92
                            ],
                            [
                                "14.00",
                                0.4
                            ],
                            [
                                "14.50",
                                0.19
                            ],
                            [
                                "15.00",
                                0.24
                            ],
                            [
                                "15.50",
                                0.76
                            ]
                        ]
                    },
                    {
                        "name": "Evening",
                        "id": "Evening",
                        "data": [
                            [
                                "16.00",
                                0.96
                            ],
                            [
                                "16.50",
                                0.82
                            ],
                            [
                                "17.00",
                                0.14
                            ],
                            [
                                "17.50",
                                0.184
                            ],
                            [
                                "18.00",
                                0.143
                            ],
                            [
                                "18.50",
                                0.193
                            ]
                        ]
                    }
                ]
            }
        });
    }else{
        chartbar.setSize(1340,550, false);
        chartbar.zoomOut(0.8);
    }

});