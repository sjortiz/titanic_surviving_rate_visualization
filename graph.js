function makeSvg(width, height, margin) {

    return d3.select("body")
        .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
        .append('g')
        .attr('class','chart');

};

function makeAgeGroup(data) {

    var transformed = []

    data.forEach(
        function(datapoint, index){

            var Age = datapoint.Age

            if (Age != 0){

                if (Age > 0 && Age <= 10){
                    ageGroup = '1-10';
                } else if (Age > 10 && Age <= 20){
                    ageGroup = '11-20';
                } else if (Age > 20 && Age <= 30){
                    ageGroup = '21-30';
                } else if (Age > 30 && Age <= 40){
                    ageGroup = '31-40';
                } else if (Age > 40 && Age <= 50){
                    ageGroup = '41-50';
                } else if (Age > 50 && Age <= 60){
                    ageGroup = '51-60';
                } else if (Age > 60 && Age <= 70){
                    ageGroup = '61-70';
                } else if (Age > 70 && Age <= 80){
                    ageGroup = '71-80';
                }

                datapoint.Age = ageGroup
                transformed.push(datapoint);
            }
        }
    )

    return transformed
};

function addTitle(title, tag='h2', inside='body') {
   return d3.select(inside).append(tag).text(title)
}

function draw(data) {

    "use strict";
    var margin = 75,
    width = 1400 - margin,
    height = 600 - margin;

    var pageTitle = addTitle(
        "Titanic Survivers by group's Age"
    )

    var data = makeAgeGroup(data)

    // Bar chart
    var firstGraph = makeSvg(width, height, margin);
    var myChartFirst = new dimple.chart(
        firstGraph,
        data,
    );
    var x = myChartFirst.addCategoryAxis('x', 'Age');
    x.title = "Age group";
    x.addOrderRule('Age');
    var y = myChartFirst.addMeasureAxis('y', 'Survived');
    var myChartFirstLegend = myChartFirst.addLegend(
        10, 100, 60, 300, "Right"
    );
    y.title = 'Survivers';
    myChartFirst.addSeries('Sex', dimple.plot.bar);
    myChartFirst.draw();

    // Scatter-plot + line chart
    var scatterPlotLine = makeSvg(width, height, margin);
    var myChartSecond = new dimple.chart(
        scatterPlotLine,
        data,
    );
    var x = myChartSecond.addCategoryAxis('x', 'Age');
    x.title = "Age group";
    x.addOrderRule('Age')
    var y = myChartSecond.addMeasureAxis('y','Survived')
    var myChartSecondLegend = myChartSecond.addLegend(
        10, 100, 60, 300, "Right"
    );
    y.title = 'Survivers'
    myChartSecond.addSeries('Sex', dimple.plot.line);
    myChartSecond.addSeries('Sex', dimple.plot.scatter);
    myChartSecond.draw();

    // bubble chart first try
    var bubbleChart = makeSvg(width, height, margin);
    var myChartThird = new dimple.chart(
        bubbleChart,
        data
    )
    var x = myChartThird.addCategoryAxis('x', 'Pclass')
    var y = myChartThird.addCategoryAxis('y', 'Age')
    var z = myChartThird.addMeasureAxis('z', 'Survived')
    var myChartThirdLegend = myChartThird.addLegend(
        10, 100, 60, 300, "Right"
    );
    
    myChartThird.addSeries('Sex', dimple.plot.bubble)
    myChartThird.draw()

    myLegend.shapes.selectAll("text").style("font-size", "20px");
};
