function draw(data) {

    /*
    D3.js setup code
    */

    "use strict";
    var margin = 75,
    width = 1400 - margin,
    height = 600 - margin;

    d3.select("body")
        .append("h2")
        .text("Titanic survivor rate")

    var svg = d3.select("body")
        .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
        .append('g')
        .attr('class','chart');

    /*
    Dimple.js Chart construction code
    */

    // var myChart = new dimple.chart(svg, data);
    // var x = myChart.addCategoryAxis('x', 'Age');
    // x.addOrderRule('Age')
    // myChart.addMeasureAxis('y','Survived')
    // myChart.addSeries("Pclass", dimple.plot.scatter);
    // myChart.draw();

    var myChart = new dimple.chart(svg, data);
    var y = myChart.addMeasureAxis('y', 'Survived');

    var x = myChart.addCategoryAxis('x', 'Age');
    x.addOrderRule('Age');
    // myChart.addSeries("Pclass", dimple.plot.scatter);
    var series = myChart.addSeries("Sex", dimple.plot.bar);

    myChart.addLegend(0, 60 , 80, 50, "right");
    myChart.draw()
};
