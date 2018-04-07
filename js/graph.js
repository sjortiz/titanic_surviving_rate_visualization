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
        "Titanic Survivers by group's Age"
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
    
    myChartThird.addSeries('Sex', dimple.plot.bubble)
    myChartThird.draw()

    myLegend.shapes.selectAll("text").style("font-size", "20px");
};
