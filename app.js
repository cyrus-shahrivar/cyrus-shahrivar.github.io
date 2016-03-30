console.log("connected to app.js");

var width = 400,
    height = 400,
    radius = 200;

var colors = d3.scale.category20();

var totalRefugees2014 = 19500000;
var usRefugees2014 = 69986;

var pieValues = [
  {name: "Refugees Not Resettled in U.S.", value: (totalRefugees2014-usRefugees2014)},
  {name: "Refugees Resettled in U.S.", value: usRefugees2014}
];

var pie = d3.layout.pie()
            .value(function (d) {
              return d.value;
            });

var arc = d3.svg.arc()
            .outerRadius(radius);

var chart = d3.select("#chart").append("svg")
              .attr("width", width)
              .attr("height", height)
              .append("g")
              .attr('transform', 'translate(' + (width - radius) + ',' + (height - radius) + ')')
              .selectAll("path")
              .data(pie(pieValues))
              .enter()
                .append("path")
                .attr("fill", function (d,i) {
                  return colors(i);
                })
                .attr("d", arc);
