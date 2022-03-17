// Make monochrome colors
var pieColors = (function() {
    var colors = ['#abcdef', '#007bff', '#19be9f', '#be7e19', '#a620a2', '#a62045', '#19be9f'],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'NUBLE',
        data: [
            { name: 'Liquidity 10%', y: 5 },
            { name: 'Reward 55%', y: 55 },
            { name: 'Charity 5%', y: 5 },
            { name: 'Team 30%', y: 30 }


        ]
    }]
});