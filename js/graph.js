function makeSvg(width, height, margin) {
    /* Function that appends a SVG element to the page
    and retur it's referecen */
    return d3.select("body")
        .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
        .append('g')
        .attr('class','chart');

};

function makeAgeGroup(data) {
    /* Function that updates the age to range
    Instead of a exact number and removes the unkowns*/
    var transformed = []

    data.forEach(
        function(datapoint, index){

            var Age = datapoint.Age

            if (Age != 0){

                if (Age > 0 && Age < 10){
                    ageGroup = '0-9';
                } else if (Age >= 10 && Age < 20){
                    ageGroup = '10-19';
                } else if (Age >= 20 && Age < 30){
                    ageGroup = '20-29';
                } else if (Age >= 30 && Age < 40){
                    ageGroup = '30-39';
                } else if (Age >= 40 && Age < 50){
                    ageGroup = '40-49';
                } else if (Age >= 50 && Age < 60){
                    ageGroup = '50-59';
                } else if (Age >= 60 && Age < 70){
                    ageGroup = '60-69';
                } else if (Age >= 70){
                    ageGroup = '70-above';
                }

                datapoint.Age = ageGroup
                transformed.push(datapoint);
            }
        }
    )

    return transformed
};

function addTitle(title, tag='h2', inside='body') {
    /* Function that adds a tag inside an element
    by default a h2*/
   return d3.select(inside).append(tag).text(title)
}

function draw(data) {
    /* Main function that assembles everything to make the graph
    */
    "use strict";
    var margin = 75,
    width = 1400 - margin,
    height = 600 - margin;

    var pageTitle = addTitle(
        "Titanic Survivers Graph: Pclass VS Age-group VS Sex"
    )

    var data = makeAgeGroup(data)

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
    x.title = 'Passenger sitting class';
    myChartThird.addSeries('Sex', dimple.plot.bubble)
    myChartThird.draw()

    myLegend.shapes.selectAll("text").style("font-size", "40px");
};
