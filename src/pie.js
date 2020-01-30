import {Base} from './base.js'

export function Pie(obj){
    Base.call(this, obj)
}

Pie.prototype = Object.create(Base.prototype);

Pie.prototype.draw = function(){
    var self = this;

    // var ctx = document.querySelector('canvas').getContext('2d');
    // ctx.font = '15px Georgia';
    var total = this.data.reduce(function(sum, choice) {
      return sum + choice.count;
    }, 0);

    //start at the top
    var currentAngle = -0.5 * Math.PI;
    var centerX = this.width/ 2,
        centerY = this.height / 2;


    this.data.forEach(function(result) {

      var sliceAngle = (result.count / total) * 2 * Math.PI;
      var middleAngle = currentAngle + 0.5 * sliceAngle;
      

      // pie slices
      self.ctx.beginPath();
      self.ctx.arc(centerX, centerY, (self.height / 10 + self.width / 10), currentAngle, currentAngle + sliceAngle);
      currentAngle += sliceAngle;
      self.ctx.lineTo(centerX, centerY);
      self.ctx.fillStyle = result.color;
      self.ctx.fill();
      
      // labels
    //   if (middleAngle < - 0.5 * Math.PI || middleAngle > 0.5 * Math.PI) {
    //     self.ctx.textAlign = 'right';
    //   } else {
    //     self.ctx.textAlign = 'left';
    //   }
    //   self.ctx.textBaseline = 'middle';
    //   self.ctx.fillText(result.name,
    //               Math.cos(middleAngle) * (self.canvas.parentElement.clientHeight / 10 + self.canvas.parentElement.clientWidth / 10) + centerX,
    //               Math.sin(middleAngle) * (self.canvas.parentElement.clientHeight / 10 + self.canvas.parentElement.clientWidth / 10) + centerY);
    });        
}