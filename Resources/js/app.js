//from data.js

var tableData = data;

//reference for the table body

var tbody = d3.select("tbody");

//log our output to the console so far to see if our data table works!

console.log(data);

data.forEach(function(dataObject) {
    console.log(dataObject);
});