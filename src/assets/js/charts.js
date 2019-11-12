// Uncomment to style it like Apple Watch
/*
if (!Highcharts.theme) {
    Highcharts.setOptions({
        chart: {
            backgroundColor: 'black'
        },
        colors: ['#F62366', '#9DFF02', '#0CCDD6'],
        title: {
            style: {
                color: 'silver'
            }
        },
        tooltip: {
            style: {
                color: 'silver'
            }
        }
    });
}
// */

/**
 * In the chart render event, add icons on top of the circular shapes*/
 Highcharts.SVGRenderer.prototype.symbols.download = function (x, y, w, h) {
    var path = [
	
        
       
        // Arrow stem
        'M', x + w * 0.8, y,
        'L', x + w * 0.8, y,
		
        // Arrow head
        'M', x + w * 0.4, y,
        'L', x + w * 0.4, y,
        // Box
        'M', x, y,
        'L', x, y,
        'L', x, y,
        'L', x, y
    ];
    return path;
};
function renderIcons() {

    // Move icon
    // if (!this.series[0].icon) {
        // this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            // .attr({
                // 'stroke': '#303030',
                // 'stroke-linecap': 'round',
                // 'stroke-linejoin': 'round',
                // 'stroke-width': 2,
                // 'zIndex': 10
            // })
            // .add(this.series[2].group);
    // }
    // this.series[0].icon.translate(
        // this.chartWidth / 2 - 10,
        // this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
            // (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
    // );

    // Exercise icon
    // if (!this.series[1].icon) {
        // this.series[1].icon = this.renderer.path(
            // ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                // 'M', 8, -8, 'L', 16, 0, 8, 8]
            // )
            // .attr({
                // 'stroke': '#ffffff',
                // 'stroke-linecap': 'round',
                // 'stroke-linejoin': 'round',
                // 'stroke-width': 2,
                // 'zIndex': 10
            // })
            // .add(this.series[2].group);
    // }
    // this.series[1].icon.translate(
        // this.chartWidth / 2 - 10,
        // this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
            // (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
    // );

    // Stand icon
    // if (!this.series[2].icon) {
        // this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            // .attr({
                // 'stroke': '#303030',
                // 'stroke-linecap': 'round',
                // 'stroke-linejoin': 'round',
                // 'stroke-width': 2,
                // 'zIndex': 10
            // })
            // .add(this.series[2].group);
    // }

    // this.series[2].icon.translate(
        // this.chartWidth / 2 - 10,
        // this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
            // (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
    // );
}

Highcharts.chart('chart1', {

    chart: {
        type: 'solidgauge',
         
        events: {
            render: renderIcons
        }
    },

    title: {
        text: '<span style="font-size:16px;">Usage Division <span style="color:#c1c1c1;font-size:16px;">This year</span></span>',
		align:'left',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '<div style="text-align:center;display:block">{series.name}<br><span style="font-size:2em;text-align:center; color: {point.color}; font-weight: bold;display:block;text-align:center;">{point.y}%</span></div>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '107%',
            innerRadius: '100%',
            backgroundColor: '#eeeeee',
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '82%',
            innerRadius: '75%',
            backgroundColor: '#eeeeee',
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '54%',
            innerRadius: '48%',
            backgroundColor: '#eeeeee',
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
		marker: {
            symbol: 'circle',
            fillColor: '#476ef1',
        },
		lineWidth: 0,
		showInLegend: true,
        name: 'Journals',
        data: [{
            //color: Highcharts.getOptions().colors[0],
			color:'#476ef1',
            radius: '107%',
            innerRadius: '100%',
            y: 80
        }]
    }, {
		marker: {
            symbol: 'circle',
            fillColor: '#f9e27a',
        },
		lineWidth: 0,
		showInLegend: true,
        name: 'Books',
        data: [{
            //color: Highcharts.getOptions().colors[1],
			color:'#f9e27a',
            radius: '82%',
            innerRadius: '75%',
            y: 65
        }]
    }, {
		marker: {
            symbol: 'circle',
            fillColor: '#f5555a',
			 
        },
		lineWidth: 0,
		showInLegend: true,
        name: 'Databases',
        data: [{
            //color: Highcharts.getOptions().colors[2],
			color:'#f5555a',
            radius: '54%',
            innerRadius: '48%',
            y: 50,
			
        }]
    }],
	exporting: {
        buttons: {
            contextButton: {
                symbol: 'download'
            }
        }
    }
});
//end of chart 1	


Highcharts.chart('chart2', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature',
		align:'left',
    },
    subtitle: {
        text: ' '
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }, {
        name: 'New delhi',
        data: [112, 114.2, 213, 118, 112, 115 , 118.0, 119.6, 116.2, 115.3, 66.6, 114.8]
    }],
	exporting: {
        buttons: {
            contextButton: {
                symbol: 'download'
            }
        }
    }
});
	//end of chart2
	
Highcharts.chart('chart3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top Platforms by Access Denial Journals',
		align:'left',
    },
    xAxis: {
        categories: ['Project MUSE', 'Cambridge Journals Online', 'Institute of Electrical and Electronics Engineers', 'OvidSP', 'JSTOR']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Access Denied to Full-text Articles'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
		
    },
    series: [{
        name: 'Access denied: concurrent/simultaneous user licence limit exceeded',
        data: [3500, 5100, 400, 7400, 4200],
		color: '#8abe6e'
    }, {
        name: 'Access denied: content item not licenced',
        data: [7200, 6200, 2303, 3200, 4100],
		color: '#aacce7'
    }],
	exporting: {
        buttons: {
            contextButton: {
                symbol: 'download'
            }
        }
    }
});
//end of chart 3 /

Highcharts.chart('chart4', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top Journal Stats comparision with rest of the titles',
		align:'left',
    },
    subtitle: {
        text: '  '
    },
    xAxis: {
        categories: [
            'Diabetes(high)',
            'New England Journal of Medicine(nejm)',
            'New England Journal of Medicine(nejm)',
            'Nature Communications(npg)',
            'Harvard Business Review(ebsco)',
            'European Journal of Clinical Pharmacology(spr)',
            'European Journal of Nuclear Medicine and Molecular Imaging(spr)',
            'CPT: Pharmacometrics & Systems Pharmacology(wil)',
             
             
            
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Values'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0
        }
    },
    series: [ {
        name: 'Top Journal YTD Stats',
        data: [1148.9, 2138.8, 2139.3, 2241.4, 2347.0, 2448.3, 2559.0, 2659.6  ],
		color: '#aacce7'

    }, {
        name: 'YTD Stats-Excluding top Journal',
        data: [2142.4, 2233.2, 1234.5, 2139.7, 2452.6, 3475.5, 2157.4, 2060.4  ],
		color:'#8abe6e'

    }],
	exporting: {
        buttons: {
            contextButton: {
                symbol: 'download'
            }
        }
    }
});
//end of chart 4

 
	
	Highcharts.chart('chart5', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Top 10 Platforms with Low usages stats - Between 1-10',
		align:'left',
    },
	subtitle: {
        text: ' <span style="width:150px;display:block;font-size:16px;text-align:center;color:#c1c1c1;">Successful<br> Full-text Requests </span>',
		align: 'center',
		floating: true,
		verticalAlign: 'middle',
		x: -60,
		useHTML: true
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Area (square km): <b>{point.y}</b><br/>' +
            'Population density (people per square km): <b>{point.z}</b><br/>'
    },
	plotOptions: {
        variablepie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
        }
    },
	 legend: {
   layout: 'vertical',
   align: 'right',
   verticalAlign: 'middle',
   itemMarginTop: 10,
   itemMarginBottom: 10
 },
    series: [{
        minPointSize: 5,
        innerSize: '80%',
        zMin: 0,
        name: 'countries',
        data: [{
            name: 'Spain',
            y: 505370,
            z: 118.9,
			color: '#e58097'
        }, {
            name: 'France',
            y: 505370,
            z: 118.9,
			color: '#86bd77'
        }, {
            name: 'Poland',
            y: 212685,
            z: 118.9,
			color: '#8fcccd'
        }, {
            name: 'Czech Republic',
            y: 212685,
            z: 118.9,
			color: '#75babb'
        }, {
            name: 'Italy',
            y: 212685,
            z: 118.9,
			color: '#f9e27a'
        }]
    }],
	exporting: {
        buttons: {
            contextButton: {
                symbol: 'download'
            }
        }
    }
});

	//end of chart 5
	
	Highcharts.chart('chart6', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Highest Zero Usages Platform',
		align:'left',
		
    },
	subtitle: {
        text: ' <span style="width:150px;display:block;font-size:16px;text-align:center;color:#c1c1c1;">Successful<br> Full-text Requests </span>',
		align: 'center',
		floating: true,
		verticalAlign: 'middle',
		x: -70,
		useHTML: true
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Area (square km): <b>{point.y}</b><br/>' +
            'Population density (people per square km): <b>{point.z}</b><br/>'
    },
	 plotOptions: {
        variablepie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
	 legend: {
   layout: 'vertical',
   align: 'right',
   verticalAlign: 'middle',
   itemMarginTop: 10,
   itemMarginBottom: 5,
   
    
 },
    series: [{
        minPointSize: 5,
        innerSize: '80%',
        zMin: 0,
        name: 'countries',
        data: [{
            name: 'Spain',
            y: 505370,
            z: 118.9,
			color: '#e58097'
        }, {
            name: 'France',
            y: 505370,
            z: 118.9,
			color: '#86bd77'
        }, {
            name: 'Poland',
            y: 212685,
            z: 118.9,
			color: '#8fcccd'
        }, {
            name: 'Czech Republic',
            y: 212685,
            z: 118.9,
			color: '#75babb'
        }, {
            name: 'Italy',
            y: 212685,
            z: 118.9,
			color: '#f9e27a'
        }, {
            name: 'Poland 1',
            y: 212685,
            z: 118.9,
			color: '#A4AA60'
        }, {
            name: 'Czech Republic 1',
            y: 212685,
            z: 118.9,
			color: '#FF0227'
        }, {
            name: 'Italy 1',
            y: 212685,
            z: 118.9,
			color: '#FFA567'
        }]
    }],
	exporting: {
        buttons: {
            contextButton: {
                symbol: 'download'
            }
        }
    }
	
});

	//end of chart 6