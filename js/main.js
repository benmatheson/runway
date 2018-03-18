
d3.csv("data/runwayTrueLength.csv", function(data){


var dataLong = data.filter(d=> d.TORA>12000)
var dataShort = data.filter(d=> d.TORA<3000)
var dataNY = data.filter(d=> d.StateAbbv==1)
var dataLongest = data.filter(d=> d.TORA>14000)
var dataShortest = data.filter(d=> d.TORA<2000)



var dataSort = data.sort((a,b)=> a.TORA-b.TORA)



var data4 = data.filter(d=> d.TORA<4000)
var data6 = data.filter(d=> d.TORA>4000 && d.TORA<=6000)
var data8 = data.filter(d=> d.TORA>6000 &&d.TORA<=8000)
var data10 = data.filter(d=> d.TORA>8000 &&d.TORA<=10000)
var data12 = data.filter(d=> d.TORA>10000 &&d.TORA<=12000)
var data16 = data.filter(d=> d.TORA>12000)

console.log("datalong");
console.log(dataLong);

var svg = d3.select('#main')
  .append('svg')
  .attr("width", "1100px")  
  .attr("height", "500px")
.attr("class", "fill");


var svgG = svg.append('g')



var greenie = "#95C2AE";
svgG.selectAll('line')
	.data(data)
	.enter()
	.append('line')
   .style("stroke", "lightblue") 
   .style("stroke", (d,i)=>`rgba(200,220, ${d.TORA/1000},.8)`)
   .style("stroke-width", 2) 
   .style("stroke-linecap", "round") 
   .attr("opacity", .2) // colour the line
  .attr("x1", 0)
  .attr("y1", 0)
  .attr('transform', d=>'translate(700,380)rotate('+0+')')
  .attr("y2", 0)
  .transition()
  .ease(d3.easeExp)
  .duration(3000)

      .attr("x2", d=> -d.TORA/40)

  .delay((d,i)=>d.TORA/400)
.attr('transform', d=>'translate(700,380)rotate('+(d.trueNorm)+')')


function mini (div, dataName, color) {

var svg1 = d3.select(div)
  .append('svg')
  .attr("width", "100%")  
  .attr("height", "100%")
// .attr("class", "fill");


var svgG1 = svg1.append('g');

svgG1.selectAll('line')
	.data(dataName)
	.enter()
	.append('line')
   .style("stroke", color) 
   .style("stroke-width", 3) 
   .style("stroke-linecap", "round") 
   .attr("opacity", .3) // colour the line
  .attr("x1", 0)
  .attr("y1", 0)
  // .attr('transform', d=>'translate(500,400)rotate('+0+')')
  .attr('transform', d=>'translate(180,190)rotate('+(d.trueNorm)+')')

  .attr("y2", 0)
  .transition()
  .ease(d3.easeExp)
  .duration(1000)

      .attr("x2", d=> -d.TORA/90)

  .delay((d,i)=>i*40)
.attr('transform', d=>'translate(190,190)rotate('+(d.trueNorm)+')')








}



mini("#g1", data4, "#ccece6");
mini("#g2", data6, "#ccebc5");
mini("#g3", data8,"#a8ddb5");
mini("#g4", data10,"#7bccc4");
mini("#g5", data12,"43a2ca");
mini("#g6", data16,"#0868ac");




var barSvg = d3.select('#bar')
	  .append('svg')
  .attr("width", "1200px")  
  .attr("height", "600px");

  var barSvgG = barSvg.append('g');


var y = d3.scaleLinear().domain([500,16000]).range([0,500]);
var x = d3.scaleLinear().domain([0,1035]).range([0,1200]);

// var piyg = d3.scaleSequential(d3.interpolatePiYG);

var col = d3.scaleSequential(d3.interpolateBlues)
// .domain([500,16000])
// .range([0,1]);

// console.log(col(.5));
console.log("col(2000");

  // barSvgG.selectAll('circle')
  // 	.data(data)
  // 	.enter()
  // 	.append('circle')
  // 	.attr("class", "div1")
  // 	.attr('cx', (d,i)=>y(d.TORA))
  // 	.attr('cy', (d,i) =>250)
  // 	.attr('r', (d,i) =>3)



  barSvgG.selectAll('rect')
  	.data(dataSort)
  	.enter()
  	.append('rect')
  	.attr("class", "div1")
  	.attr('x', (d,i)=> i*1.1)
  	  	.attr('y', (d,i) => 600- y(d.TORA))

  	// .attr('fill', (d,i) => "#41b6c4")
  	   .style("fill", (d,i)=>`rgba(${Math.round(Math.random()*20)},200, ${Math.round(d.TORA/29)},.9)`)
.attr('opacity', 0)

  	  	// .attr('height', (d,i) =>0)
  	  	  	.attr('width', (d,i) =>.9)
  	 	.attr('height', (d,i) =>y(d.TORA))
  	 	  	.transition()

  	  	// .attr('y', (d,i) => 600- y(d.TORA))

  	.delay((d,i)=>i*Math.random()*4)
  	.duration((d,i)=>1000)
.attr('opacity', .4)




barSvgG.append('text')
	.text( "4,000 Feet")
	.attr("x", 510)
  .attr("y", 400)
  .attr("class", "anno")


barSvgG.append('text')
	.text( "10,000 Feet")
	.attr("x", 840)
  .attr("y", 310)
  .attr("class", "anno")


  barSvgG.append('text')
	.text( "16,000 Feet")
	.attr("x", 1010)
  .attr("y", 130)
  .attr("class", "anno")













})


d3.csv("data/lengthSum.csv", function(data){


var svg = d3.select('#group')
  .append('svg')
  .attr("width", "900px")  
  .attr("height", "400px")
// .attr("class", "fill");



var svgG = svg.append('g');


svgG.selectAll('line')
	.data(data)
	.enter()
	.append('line')
   .style("stroke", "black") 
   .style("stroke-width", 3) 
   .style("stroke-linecap", "round") 
   .attr("opacity", .1) // colour the line
  .attr("x1", 0)
  .attr("y1", 0)
  .attr('transform', d=>'translate(500,400)rotate('+0+')')
  .attr("y2", 0)
  .transition()
  .ease(d3.easeExp)
  .duration(3000)

      .attr("x2", d=> -d.len/1100)

  .delay((d,i)=>i*40)
.attr('transform', d=>'translate(500,400)rotate('+d.trueNorm+')')


svgG.append('text')
	.text( "90 Degrees")
	.attr("x", 510)
  .attr("y", 100)
  .attr("class", "anno")





svgG.append('text')
	.text( "45 Degrees")
	.attr("x", 300)
  .attr("y", 200)
  .attr("class", "anno")


svgG.append('text')
	.text( "180 Degrees")
	.attr("x", 700)
  .attr("y", 400)
  .attr("class", "anno")



})









