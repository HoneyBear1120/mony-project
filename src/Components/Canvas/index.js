// import React, { useEffect, useRef } from 'react'
// import Coin from '../../assets/images/canvas/coin.svg'
// import DottedPattern from '../../assets/images/canvas/Dotted-Pattern.svg'
// import ElectroNode from '../../assets/images/canvas/electron-nodes.svg'
// import MIcon from '../../assets/images/canvas/M-Icon.svg'
// import './index.css'
// function Canvas(props) {
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     var canvas, ctx, draw, facts, init, makeOrb, time
//     // facts = document.querySelectorAll('.fact')
//     canvas = document.getElementById('canvas')
//     ctx = canvas.getContext('2d')
//     time = ''
//     makeOrb = function (ctx, x, y, radius, fill) {
//       ctx.beginPath()
//       ctx.arc(x, y, radius, 0, Math.PI * 2, true)
//       ctx.closePath()
//       ctx.fillStyle = fill
//       return ctx.fill()
//     }
//     init = function () {
//       return window.requestAnimationFrame(draw)
//     }
//     draw = function () {
//       const electroImg = document.getElementById('electro-node')
//       var ball, ball2, ball3, ball4, ball5, ball6, ball7
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       ctx.globalCompositeOperation = 'destination-over'
//       ctx.save()

//       time = new Date()
//       ctx.translate(canvas.width / 2, canvas.height / 2)

//       ctx.rotate(
//         ((2 * Math.PI) / 60) * time.getSeconds() +
//           ((2 * Math.PI) / 60000) * time.getMilliseconds(),
//       )
//       ball2 = makeOrb(ctx, 0, 0 + 120, 10, 'red')
//       ball3 = makeOrb(ctx, 0, 0 - 120, 10, 'orange')
//       ball4 = makeOrb(ctx, 100, -60 + 120, 10, 'yellow')
//       ball5 = makeOrb(ctx, -100, -60 + 120, 10, 'purple')
//       ball6 = makeOrb(ctx, 100, -60, 10, 'green')
//       ball7 = makeOrb(ctx, -100, -60, 10, 'silver')
//       // ball = makeOrb(ctx, 0, 0, 200, 'blue');
//       ctx.beginPath()
//       ctx.arc(0, 0, 60, 0, Math.PI * 2, true)
//       ctx.closePath()
//       ctx.strokeStyle = '#ccc'
//       ctx.stroke()
//       ctx.restore()
//       return window.requestAnimationFrame(draw)
//     }
//     init()
//   })

// var context
// var angle = 0

// function DegToRad(d) {
//   // Converts degrees to radians
//   return d * 0.01745
// }
// useEffect(() => {
//   var draw

//   function init() {
//     return window.requestAnimationFrame(draw)
//   }

//   draw = function () {
//     const electroImg = document.getElementById('electro-node')
//     const mainCanvasImage = document.getElementById('main-canvas')
//     const mIcon = document.getElementById('m-icon')

//     // 2.*******Reference Section*********

//     const canvas = canvasRef.current
//     const context = canvas.getContext('2d')

//     context.save()
//     context.translate(10, 10)
//     // context.rotate(rotation, 1, 1)
//     context.fillStyle = '#F00'
//     // context.fillRect(-50, -50, 100, 100)
//     context.restore()

//     //Image Collections

//     // 1. Rotate The Image
//     // context.rotate(360)
//     // context.translate(electroImg.width * 0.5, electroImg.height * 0.5)

//     context.drawImage(electroImg, 270, 15, 500, 500)
//     // context.drawImage(mIcon, 450, 200, 130, 130)

//     return window.requestAnimationFrame(draw)
//   }
//   // draw()
//   // 1.*******Image Section*********
//   init()
// })

//   return (
//     <>
//       <canvas id="canvas" ref={canvasRef} {...props}>
//         <div style={{ display: 'none' }}>
//           <img
//             width={10}
//             height={10}
//             src={Coin}
//             alt="main-canvas"
//             id="main-canvas"
//           />
//           <img
//             width={10}
//             height={10}
//             src={ElectroNode}
//             alt="electro-node"
//             className="rotate"
//             id="electro-node"
//           />
//           <img width={10} height={10} src={MIcon} alt="m-icon" id="m-icon" />
//         </div>
//       </canvas>
//     </>
//   )
// }

// export default Canvas

// // import React, { useEffect } from 'react'

// // function Canvas() {
// //   useEffect(() => {
// //     var canvasLightning = function (c, cw, ch) {
// //       const init = function () {
// //         loop()
// //       }

// //       var ctx = c.getContext('2d')
// //       var canvasWidth = cw
// //       var canvasHeight = ch
// //       var mx = 0
// //       var my = 0

// //       var lightning = []
// //       var lightTimeCurrent = 0
// //       var lightTimeTotal = 50

// //       const rand = function (rMi, rMa) {
// //         return Math.random() * (rMa - rMi + 1) + rMi
// //       }

// //       const createL = function (x, y, canSpawn) {
// //         lightning.push({
// //           x: x,
// //           y: y,
// //           xRange: rand(5, 30),
// //           yRange: rand(5, 25),
// //           path: [
// //             {
// //               x: x,
// //               y: y,
// //             },
// //           ],
// //           pathLimit: rand(10, 35),
// //           canSpawn: canSpawn,
// //           hasFired: false,
// //         })
// //       }

// //       const updateL = function () {
// //         var i = lightning.length
// //         while (i--) {
// //           var light = lightning[i]

// //           light.path.push({
// //             x:
// //               light.path[light.path.length - 1].x +
// //               (rand(0, light.xRange) - light.xRange / 2),
// //             y: light.path[light.path.length - 1].y + rand(0, light.yRange),
// //           })

// //           if (light.path.length > light.pathLimit) {
// //             lightning.splice(i, 1)
// //           }
// //           light.hasFired = true
// //         }
// //       }

// //       const renderL = function () {
// //         var i = lightning.length
// //         while (i--) {
// //           var light = lightning[i]

// //           ctx.strokeStyle = 'hsla(0, 100%, 100%, ' + rand(10, 100) / 100 + ')'
// //           ctx.lineWidth = 1
// //           if (rand(0, 30) == 0) {
// //             ctx.lineWidth = 2
// //           }
// //           if (rand(0, 60) == 0) {
// //             ctx.lineWidth = 3
// //           }
// //           if (rand(0, 90) == 0) {
// //             ctx.lineWidth = 4
// //           }
// //           if (rand(0, 120) == 0) {
// //             ctx.lineWidth = 5
// //           }
// //           if (rand(0, 150) == 0) {
// //             ctx.lineWidth = 6
// //           }

// //           ctx.beginPath()

// //           var pathCount = light.path.length
// //           ctx.moveTo(light.x, light.y)
// //           for (var pc = 0; pc < pathCount; pc++) {
// //             ctx.lineTo(light.path[pc].x, light.path[pc].y)

// //             if (light.canSpawn) {
// //               if (rand(0, 100) == 0) {
// //                 light.canSpawn = false
// //                 createL(light.path[pc].x, light.path[pc].y, false)
// //               }
// //             }
// //           }

// //           if (!light.hasFired) {
// //             ctx.fillStyle = 'rgba(255, 255, 255, ' + rand(4, 12) / 100 + ')'
// //             ctx.fillRect(0, 0, cw, ch)
// //           }

// //           if (rand(0, 30) == 0) {
// //             ctx.fillStyle = 'rgba(255, 255, 255, ' + rand(1, 3) / 100 + ')'
// //             ctx.fillRect(0, 0, cw, ch)
// //           }

// //           ctx.stroke()
// //         }
// //       }

// //       const lightningTimer = function () {
// //         lightTimeCurrent++
// //         if (lightTimeCurrent >= lightTimeTotal) {
// //           var newX = rand(100, cw - 100)
// //           var newY = rand(0, ch / 2)
// //           var createCount = rand(1, 3)
// //           while (createCount--) {
// //             createL(newX, newY, true)
// //           }
// //           lightTimeCurrent = 0
// //           lightTimeTotal = rand(30, 100)
// //         }
// //       }
// //       const clearCanvas = function () {
// //         ctx.globalCompositeOperation = 'destination-out'
// //         ctx.fillStyle = 'rgba(0,0,0,' + rand(1, 30) / 100 + ')'
// //         ctx.fillRect(0, 0, cw, ch)
// //         ctx.globalCompositeOperation = 'source-over'
// //       }
// //       window.addEventListener('resize', function () {
// //         cw = c.width = window.innerWidth
// //         ch = c.height = window.innerHeight
// //       })
// //       const loop = function () {
// //         var loopIt = function () {
// //           requestAnimationFrame(loopIt, c)
// //           clearCanvas()
// //           updateL()
// //           lightningTimer()
// //           renderL()
// //         }
// //         loopIt()
// //       }
// //       init()
// //     }
// //     var isCanvasSupported = function () {
// //       var elem = document.createElement('canvas')
// //       return !!(elem.getContext && elem.getContext('2d'))
// //     }
// //     var setupRAF = function () {
// //       var lastTime = 0
// //       var vendors = ['ms', 'moz', 'webkit', 'o']
// //       for (
// //         var x = 0;
// //         x < vendors.length && !window.requestAnimationFrame;
// //         ++x
// //       ) {
// //         window.requestAnimationFrame =
// //           window[vendors[x] + 'RequestAnimationFrame']
// //         window.cancelAnimationFrame =
// //           window[vendors[x] + 'CancelAnimationFrame'] ||
// //           window[vendors[x] + 'CancelRequestAnimationFrame']
// //       }

// //       if (!window.requestAnimationFrame) {
// //         window.requestAnimationFrame = function (callback, element) {
// //           var currTime = new Date().getTime()
// //           var timeToCall = Math.max(0, 16 - (currTime - lastTime))
// //           var id = window.setTimeout(function () {
// //             callback(currTime + timeToCall)
// //           }, timeToCall)
// //           lastTime = currTime + timeToCall
// //           return id
// //         }
// //       }

// //       if (!window.cancelAnimationFrame) {
// //         window.cancelAnimationFrame = function (id) {
// //           clearTimeout(id)
// //         }
// //       }
// //     }
// //     if (isCanvasSupported) {
// //       var c = document.getElementById('canvas')
// //       var cw = (c.width = window.innerWidth)
// //       var ch = (c.height = window.innerHeight)
// //       var cl = new canvasLightning(c, cw, ch)

// //       setupRAF()
// //       // init()
// //     }
// //   })
// //   return <canvas id="canvas"></canvas>
// // }

// // export default Canvas
