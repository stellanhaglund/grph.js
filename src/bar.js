import {Base} from './base.js'

export function Bar(obj){
    Base.call(this, obj)
}

Bar.prototype = Object.create(Base.prototype);

Bar.prototype.draw = function(){

  var rows = 4;
  var margin = 10;

  var values = []
  // var names = []
  this.data.forEach(element => {
      // names.push(element.name)
      values.push(element.count)
  });

  // var min = Math.min(...values);
  var max = Math.max(...values);


  // draw lines and text

  var heightmargin = this.height - (margin * 2)
  var pixeslsteps = Math.round(heightmargin/rows)

  this.ctx.strokeStyle = "#ddd";
  this.ctx.beginPath()

  for(var i = 1; i <= rows; i++){
    var y = (pixeslsteps * i) - pixeslsteps
    var text = Math.round(max/i)
    this.ctx.fillText(text, margin, y + margin + 4);
    this.ctx.moveTo(margin + 50, y + margin)
    this.ctx.lineTo(this.width - margin, y + margin)
  }

  this.ctx.stroke()


  // draw boxes

  var bars = this.data.length;
  var startx = margin + 50
  var w = (this.width - startx) / bars;
  var yscale = this.height / max

  this.ctx.beginPath()

  for(var i = 0; i < bars; i++){

    var x = ( w * i) + startx
    var h = yscale * this.data[i].count
    var y = (this.height + margin) - h 

    
    this.ctx.fillStyle = "#C380EF"
    this.ctx.rect(x, y, w / 3, h)
    this.ctx.fill()

    this.ctx.strokeStyle = "#A015FC"
    this.ctx.lineWidth = 5;
    

  }
  
  this.ctx.stroke()


}

