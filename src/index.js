import {Pie} from './pie.js'
import {Bar} from './bar.js'

export default function Grph(obj){
    switch(obj.type){
        case 'pie':
            return new Pie(obj)
            break
        case 'bar':
            return new Bar(obj)
            break
        default:
            break
    }
}












// export function PieChart(canvas){

//     var ctx = canvas.getContext("2d");

//     canvas.width = canvas.parentElement.clientWidth * 2;
//     canvas.height = canvas.parentElement.clientHeight * 2;

//     canvas.style.width = canvas.parentElement.clientWidth + 'px'
//     canvas.style.height = canvas.parentElement.clientHeight + 'px'

//     ctx.scale(2,2)         
    
//     var Val_Max;
//     var Val_Min;
//     var sections;
//     var xScale;
//     var yScale;
//     var y;
//     var scale;

//       // values of each item on the graph
//     var itemName = [ "USA", "China", "India", "Japan" , "Germany"];
//     var itemValue = [ 44, 47, 50, 44, 40 ];

//     // function init() {
//       // intialize values for each variables
//     sections = 5;
//     Val_Max = Math.max(...itemValue);
//     Val_Min = Math.min(...itemValue);
//     var stepSize = (Val_Max - Val_Min) / 1;
//     var columnSize = 50;
//     var rowSize = 60;
//     var margin = 10;
//     var header = "Values" 
//       //
      
//     // canvas = document.getElementById("canvas");
//     // ctx = canvas.getctx("2d");
//     ctx.fillStyle = "#333"
    
//     yScale = (canvas.height - columnSize - margin) / (Val_Max);
//     xScale = (canvas.width/2 - rowSize) / (sections + 1);
    
//     ctx.strokeStyle="#ddd"; // background black lines
//     ctx.beginPath();
//       // column names 
//     ctx.font = "19 pt Arial;"
//     ctx.fillText(header, 0,columnSize - margin);
//       // draw lines in the background
//     ctx.font = "16 pt Helvetica"
//     var count =  0;
//     for (scale=Val_Max;scale>=0;scale = scale - stepSize) {
//       y = columnSize + (yScale * count * stepSize);
//       ctx.fillText(Math.round(scale), margin,y + margin - 5);
//       ctx.moveTo(rowSize,y)
//       ctx.lineTo(canvas.width,y)
//       count++;
//     }
//     ctx.stroke();

    
    
    
//       // print names of each data entry
//     ctx.font = "20 pt Verdana";
//     ctx.textBaseline="bottom";
//     // for (var i=0;i<5;i++) {
//     //   computeHeight(itemValue[i]);
//     //   ctx.fillText(itemName[i], xScale * (i+1),400);
//     // }
    
//       // shadow for graph's bar lines with color and offset
//     ctx.fillStyle="#9933FF;";
//     ctx.shadowColor = 'rgba(128,128,128, 0.5)';
    
//     //shadow offset along X and Y direction 
//     // ctx.shadowOffsetX = 9;
//     // ctx.shadowOffsetY = 3;
    
//       // translate to bottom of graph  inorder to match the data 
//     ctx.translate(0,canvas.height - margin);
//     ctx.scale(xScale,-1 * yScale);
    
//     //	draw each graph bars	

//     var opacity = 1
//     for (var i=0;i<5;i++) {
//         var color = `rgba(204, 51, 255, ${opacity})`
//         ctx.fillStyle = color;
//         opacity -= 0.1;        
//       ctx.fillRect(i+1, 0, 0.3, itemValue[i]);
//     }
//   // }

//   function computeHeight(value) {
//     y = canvas.height - value * yScale ;	
//   }    










    // var ctx = canvas.getContext("2d");

    // canvas.width = canvas.parentElement.clientWidth * 2;
    // canvas.height = canvas.parentElement.clientHeight * 2;

    // canvas.style.width = canvas.parentElement.clientWidth + 'px'
    // canvas.style.height = canvas.parentElement.clientHeight + 'px'

    // ctx.scale(2,2)         
    
    // var results = [
    //   {name: 'Satisfied', count: 1043, color: '#4a90e2'},
    //   {name: 'Neutral', count: 563, color: '#5a90e2'},
    //   {name: 'Unsatisfied', count: 510, color: '#6a90e2'},
    //   {name: 'No comment', count: 175, color: '#7a90e2'}
    // ]

    // // var ctx = document.querySelector('canvas').getContext('2d');
    // // ctx.font = '15px Georgia';
    // var total = results.reduce(function(sum, choice) {
    //   return sum + choice.count;
    // }, 0);

    // //start at the top
    // var currentAngle = -0.5 * Math.PI;
    // var centerX = canvas.parentElement.clientWidth / 2,
    //     centerY = canvas.parentElement.clientHeight / 2;

    // results.forEach(function(result) {
    //   var sliceAngle = (result.count / total) * 2 * Math.PI;
    //   var middleAngle = currentAngle + 0.5 * sliceAngle;
      
    //   // pie slices
    //   ctx.beginPath();
    //   ctx.arc(centerX, centerY, (canvas.parentElement.clientHeight / 10 + canvas.parentElement.clientWidth / 10), currentAngle, currentAngle + sliceAngle);
    //   currentAngle += sliceAngle;
    //   ctx.lineTo(centerX, centerY);
    //   ctx.fillStyle = result.color;
    //   ctx.fill();
      
    //   // labels
    //   if (middleAngle < - 0.5 * Math.PI || middleAngle > 0.5 * Math.PI) {
    //     ctx.textAlign = 'right';
    //   } else {
    //     ctx.textAlign = 'left';
    //   }
    //   ctx.textBaseline = 'middle';
    //   ctx.fillText(result.name,
    //               Math.cos(middleAngle) * (canvas.parentElement.clientHeight / 10 + canvas.parentElement.clientWidth / 10) + centerX,
    //               Math.sin(middleAngle) * (canvas.parentElement.clientHeight / 10 + canvas.parentElement.clientWidth / 10) + centerY);
    // });      
// }