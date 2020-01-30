import {Base} from './base.js'

export function Bar(obj){
    Base.call(this, obj)
}

Bar.prototype = Object.create(Base.prototype);


Bar.prototype.draw = function(){
    var Val_Max;
    var Val_Min;
    var sections;
    var xScale;
    var yScale;
    var y;
    var scale;

      // values of each item on the graph
    var itemName = [ "USA", "China", "India", "Japan" , "Germany"];
    var itemValue = [ 44, 47, 50, 44, 40 ];

    // function init() {
      // intialize values for each variables
    sections = 5;
    Val_Max = Math.max(...itemValue);
    Val_Min = Math.min(...itemValue);
    var stepSize = (Val_Max - Val_Min) / 1;
    var columnSize = 50;
    var rowSize = 60;
    var margin = 10;
    var header = "Values" 
      //
      
    // this.canvas = document.getElementById("this.canvas");
    // this.ctx = this.canvas.getthis.ctx("2d");
    this.ctx.fillStyle = "#333"
    
    yScale = (this.canvas.height - columnSize - margin) / (Val_Max);
    xScale = (this.canvas.width/2 - rowSize) / (sections + 1);
    
    this.ctx.strokeStyle="#ddd"; // background black lines
    this.ctx.beginPath();
      // column names 
    this.ctx.font = "19 pt Arial;"
    this.ctx.fillText(header, 0,columnSize - margin);
      // draw lines in the background
    this.ctx.font = "16 pt Helvetica"
    var count =  0;
    for (scale=Val_Max;scale>=0;scale = scale - stepSize) {
      y = columnSize + (yScale * count * stepSize);
      this.ctx.fillText(Math.round(scale), margin,y + margin - 5);
      this.ctx.moveTo(rowSize,y)
      this.ctx.lineTo(this.canvas.width,y)
      count++;
    }
    this.ctx.stroke();

    
    
    
      // print names of each data entry
    // this.ctx.font = "20 pt Verdana";
    // this.ctx.textBaseline="bottom";
    // for (var i=0;i<5;i++) {
    //   computeHeight(itemValue[i]);
    //   this.ctx.fillText(itemName[i], xScale * (i+1),400);
    // }
    
      // shadow for graph's bar lines with color and offset
    this.ctx.fillStyle="#9933FF;";
    this.ctx.shadowColor = 'rgba(128,128,128, 0.5)';
    
    //shadow offset along X and Y direction 
    // this.ctx.shadowOffsetX = 9;
    // this.ctx.shadowOffsetY = 3;
    
      // translate to bottom of graph  inorder to match the data 
    this.ctx.translate(0,this.canvas.height - margin);
    this.ctx.scale(xScale,-1 * yScale);
    
    //	draw each graph bars	
    this.ctx.fillStyle = `rgba(204, 51, 255, 1)`

    for (var i=0;i<5;i++) {
      this.ctx.fillRect(i+1, 0, 0.3, itemValue[i]);
    }
  // }

  // function computeHeight(value) {
  //   y = this.canvas.height - value * yScale ;	
  // }        
}