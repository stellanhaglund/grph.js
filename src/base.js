export function Base(obj){
    this.canvas = obj.canvas
    this.ctx = this.canvas.getContext('2d')
    this.data = obj.data

    this.resize()
}

Base.prototype.resize = function(){

    this.width = this.canvas.parentElement.clientWidth
    this.height = this.canvas.parentElement.clientHeight

    this.canvas.width = this.width * 2
    this.canvas.height = this.height * 2
    this.canvas.style.width = this.width + 'px'
    this.canvas.style.height = this.height + 'px'   
    this.ctx.scale(2,2)

    this.draw()    

}