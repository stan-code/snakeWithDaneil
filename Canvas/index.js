var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

// c.fillStyle = 'rgba(255, 0, 0, 0.1)'
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'rgba(0, 0, 255, 0.1)'
// c.fillRect(300, 300, 100, 100)
// c.fillStyle = 'rgba(0, 255, 0, 0.1)'
// c.fillRect(600, 300, 100, 100)

// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.lineTo(50, 300)
// c.strokeStyle = "#fa34a3"
// c.stroke()

// // arc

// // c.beginPath()
// // c.arc(300, 300, 30, 0, Math.PI * 2, false )
// // c.strokeStyle = 'blue'
// // c.stroke()

// for (var i = 0; i < 30; i++){
var radius = 30
var inw = innerWidth
var inh = innerHeight

var x = Math.random() * inw
var y = Math.random() * inh
var dx = (Math.random() - 0.5) * 3
var dy = (Math.random() - 0.5) * 3


  
//   c.beginPath()
//   c.arc(x, y, 30, 0, Math.PI * 2, false)
//   c.strokeStyle = 'blue'
//   c.stroke()
// }



function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0,0, innerWidth, innerHeight)



  c.beginPath()
  c.arc(x, y, 30, 0, Math.PI * 2, false)
  c.fillStyle = 'red'
  c.fill()
  c.strokeStyle = 'blue'
  c.lineWidth = 5
  c.stroke()

  if (x + radius > innerWidth || x - radius < 0){
    dx = -dx
  }

  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy
  }

  x += dx
  y += dy


}

animate()