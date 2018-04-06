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
        "Titanic Survivers by grop's Age"
    )

    var data = makeAgeGroup(data)

    // Bar chart
    var firstGraph = makeSvg(width, height, margin);
    var myChart = new dimple.chart(
        firstGraph,
        data,
    );
    var x = myChart.addCategoryAxis('x', 'Age');
    x.title = "Age group";
    x.addOrderRule('Age')
    var y = myChart.addMeasureAxis('y','Survived')
    y.title = 'Survivers'
    myChart.addSeries(null, dimple.plot.bar);
    myChart.draw();

    // Scatter-plot + line chart
    var secondGraph = makeSvg(width, height, margin);
    var myChart = new dimple.chart(
        secondGraph,
        data,
    );
    var x = myChart.addCategoryAxis('x', 'Age');
    x.title = "Age group";
    x.addOrderRule('Age')
    var y = myChart.addMeasureAxis('y','Survived')
    y.title = 'Survivers'
    myChart.addSeries(null, dimple.plot.line);
    myChart.addSeries(null, dimple.plot.scatter);
    myChart.draw();
};
