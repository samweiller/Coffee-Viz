var chart;
var theMargins = {
    top: 20,
    right: 80,
    bottom: 60,
    left: 80
};
var height = 600 - theMargins.left - theMargins.right;
var width = 800 - theMargins.top - theMargins.bottom;

var x = d3.scaleLinear()
    .range([0, width]);

var y = d3.scaleLinear()
    .range([height, 0]);

var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(0)

var yAxis = d3.axisRight()
    .scale(y)
    .ticks(0)

//Gets called when the page is loaded.
function init() {
    //*// CREATE VIZ \\*\\
    chart = d3.select('#vis').append('svg')
        .attr("width", width + theMargins.left + theMargins.right)
        .attr("height", height + theMargins.top + theMargins.bottom);
    vis = chart.append('g')
        .attr("transform", "translate(" + theMargins.left + "," + theMargins.top + ")");
    //PUT YOUR INIT CODE BELOW

    vis.append("g")
        .attr("class", "theXAxis")
        .attr("transform", "translate(0," + height + ")")
        .attr("stroke", "#000000")
        .call(xAxis)
        //   .append("text")
        //   .attr("x", width / 2)
        //   .attr("y", 50)
        //   .style("text-anchor", "middle")
        //   .style("font-size", "150%")
        //   .text("Year");

    vis.append("g")
        .attr("class", "theYAxis")
        .attr("transform", "translate(" + width + ", 0)")
        .attr("stroke", "#000000")
        .call(yAxis)

}

//Called when the update button is clicked
function updateClicked() {
    d3.csv('data/CoffeeData.csv', update);
}

//Callback for when data is loaded
function update(rawdata) {
    //PUT YOUR UPDATE CODE BELOW


}

// Returns the selected option in the X-axis dropdown. Use d[getXSelectedOption()] to retrieve value instead of d.getXSelectedOption()
function getXSelectedOption() {
    var node = d3.select('#xdropdown').node();
    var i = node.selectedIndex;
    return node[i].value;
}

// Returns the selected option in the X-axis dropdown.
function getYSelectedOption() {
    var node = d3.select('#ydropdown').node();
    var i = node.selectedIndex;
    return node[i].value;
}
