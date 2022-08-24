import React, { useEffect, useState, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useLocation } from 'react-router-dom'
import chain from '../../assets/images/banner/img8.png'
import coin from '../../assets/images/banner/left-first-coin.svg'

const radius = 4.5
const xAxis = new THREE.Vector3(1, 0, 0)
const yAxis = new THREE.Vector3(0, 1, 0)
const initialCamera = (camera) => {
  camera.position.z = 13
  camera.position.x = 0
  camera.position.y = 0
  camera.lookAt(0, 0, 0)
}

const initLights = (scene) => {
  const light = new THREE.DirectionalLight(0xffffff, 0.7)
  light.position.set(0, 0, 10)
  light.target.position.set(0, 0, 0)
  scene.add(light)
  scene.add(light.target)
  const plight1 = new THREE.PointLight(0xff0000, 0.5)
  plight1.position.set(7, 5, 5)
  scene.add(plight1)
  const plight2 = new THREE.PointLight(0xff0000, 0.5)
  plight2.position.set(7, -5, 5)
  scene.add(plight2)
  const plight3 = new THREE.PointLight(0x0000ff, 0.4)
  plight3.position.set(-7, 5, 5)
  scene.add(plight3)
  const plight4 = new THREE.PointLight(0x0000ff, 0.4)
  plight4.position.set(-7, -5, 5)
  scene.add(plight4)
}

const createGlobe = (scene, meshes, setLoading) => {
  const loadManager = new THREE.LoadingManager()
  loadManager.onLoad = () => {
    setLoading(false)
  }
  // let listImage = [chain, coin]
  let loader = new THREE.TextureLoader(loadManager).load(chain)

  loader.wrapS = THREE.RepeatWrapping
  loader.wrapT = THREE.RepeatWrapping
  loader.repeat.set(2, 1)

  let geometry = new THREE.SphereGeometry(radius, 32, 16)

  let material = new THREE.MeshPhongMaterial({
    // color: 0xffffff,
    specular: 'black',
    bumpScale: 1,
    // flatShading: true,
    // wireframe: true,
    // clearcoat: 100,
    // lightMapIntensity: 100,
    fog: false,
    metal: true,
    shadowSide: 'BackSide',
    // shininess: 10,
    map: loader,
  })

  let mesh = new THREE.Mesh(geometry, material)
  mesh.name = 'sphere'
  mesh.rotateY(Math.PI)
  meshes.add(mesh)
  scene.add(meshes)

  // const pointsMaterial = new THREE({
  //   size: 30,
  //   sizeAttenuation: false,
  //   map: new THREE.TextureLoader().load(coin),
  // alphaTest: 0.5,
  // })

  // const points = new THREE.Points(mesh.geometry, pointsMaterial)
  // points.morphTargetInfluences = mesh.morphTargetInfluences
  // points.morphTargetDictionary = mesh.morphTargetDictionary

  // mesh.add(points)
}

const drawLines = (scene) => {
  const material = new THREE.LineDashedMaterial({
    color: 'red',
    linewidth: 1000,
    scale: 1000,
    dashSize: 300,
    gapSize: 1,
  })
  // const points = []
  // points.push(new THREE.Vector3(-10, 10, 30))
  // points.push(new THREE.Vector3(0, 0, 0))
  // points.push(new THREE.Vector3(0, 0, 0))

  const curve = new THREE.SplineCurve([
    // new THREE.Vector2(0, 0),
    // new THREE.Vector2(-15, 15),
    // new THREE.Vector2(0, 0),
    // new THREE.Vector2(-15, 15),
    // new THREE.Vector2(0, 0),
    // new THREE.Vector2(0, 0),
    // new THREE.Vector2(-30, 30),
    // new THREE.Vector2(0, 0),
    // new THREE.Vector2(-30, 30),
    // new THREE.Vector2(0, 0),
    // new THREE.Vector2(-10, 0),
    // new THREE.Vector2(-5, 5),
    // new THREE.Vector2(0, 0),
    // new THREE.Vector2(5, -5),
    // new THREE.Vector2(10, 0),
  ])

  const points = curve.getPoints(50)
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  // points.push(new THREE.Vector3(-10, 0, 0))
  // points.push(new THREE.Vector3(0, 10, 0))
  // points.push(new THREE.Vector3(10, 0, 0))
  // points.push(new THREE.Vector3(-10, 0, 0))
  // points.push(new THREE.Vector3(0, 10, 0))
  // points.push(new THREE.Vector3(10, 0, 0))

  // const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const line = new THREE.Line(geometry, material)
  scene.add(line)
}

const initRings = (scene) => {
  let tStart = 0
  let tEnd = 0 * Math.PI
  let color = 0x8cade6
  let dRadius = 0.025
  let opacities = [0.9, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]
  opacities.forEach((x, i) => {
    let geo = new THREE.RingGeometry(
      radius + i * dRadius,
      radius + (i + 1) * dRadius,
      100,
      1,
      tStart,
      tEnd,
    )
    let mat = new THREE.MeshPhongMaterial({
      color: color,
      transparent: true,
      opacity: x,
    })
    let ringMesh = new THREE.Mesh(geo, mat)
    scene.add(ringMesh)
  })
}

const raycastMouseDown = (
  e,
  camera,
  scene,
  setClickOnSphere,
  setStartPoint,
) => {
  let mouse = { x: 0, y: 0 }
  if (e.type === 'mousedown') {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  } else if (e.type === 'touchstart') {
    mouse.x = +(e.targetTouches[0].pageX / window.innerWidth) * 2 + -1
    mouse.y = -(e.targetTouches[0].pageY / window.innerHeight) * 2 + 1
  }
  const raycaster = new THREE.Raycaster()
  raycaster.setFromCamera(mouse, camera)
  let intersects = raycaster.intersectObjects(scene.children, true)
  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i]?.object?.name === 'sphere') {
      setStartPoint({ x: mouse.x, y: mouse.y })
      setClickOnSphere(true)
      break
    }
  }
}
const mouseMove = (e, clickOnSphere, startPoint, setStartPoint, meshes) => {
  if (!clickOnSphere) return
  let mouse = { x: 0, y: 0 }
  if (e.type === 'mousemove') {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  } else if (e.type === 'touchmove') {
    mouse.x = +(e.targetTouches[0].pageX / window.innerWidth) * 2 + -1
    mouse.y = -(e.targetTouches[0].pageY / window.innerHeight) * 2 + 1
  }
  let dy = startPoint.y - mouse.y
  let dx = startPoint.x - mouse.x
  setStartPoint({ x: mouse.x, y: mouse.y })
  meshes.rotateOnWorldAxis(xAxis, (dy * Math.PI) / 3)
  meshes.rotateOnWorldAxis(yAxis, -(dx * Math.PI))
}

const resize = (camera, renderer) => {
  if (window.innerWidth >= window.innerHeight) {
    let aspectRatio = window.innerWidth / window.innerHeight
    let frustumSize = 13
    camera.left = (frustumSize * aspectRatio) / -2
    camera.right = (frustumSize * aspectRatio) / 2
    camera.top = frustumSize / 2
    camera.bottom = frustumSize / -2
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  } else {
    let aspect = window.innerHeight / window.innerWidth
    let frustumSize = 13
    camera.left = frustumSize / -2
    camera.right = frustumSize / 2
    camera.top = (frustumSize * aspect) / 2
    camera.bottom = (-frustumSize * aspect) / 2
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

const Globe = () => {
  const globeCanvas = useRef()
  const [clickOnSphere, setClickOnSphere] = useState(false)
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 })
  const [loading, setLoading] = useState(true)
  const meshes = useRef(new THREE.Object3D())
  const scene = useMemo(() => new THREE.Scene(), [])
  let location = useLocation()

  let aspectRatio =
    window.innerWidth >= window.innerHeight
      ? window.innerWidth / window.innerHeight
      : window.innerHeight / window.innerWidth
  let frustumSize = 13
  const camera = useMemo(
    () =>
      window.innerWidth >= window.innerHeight
        ? new THREE.OrthographicCamera(
            (frustumSize * aspectRatio) / -2,
            (frustumSize * aspectRatio) / 2,
            frustumSize / 2,
            frustumSize / -2,
            -100,
            100,
          )
        : new THREE.OrthographicCamera(
            frustumSize / -2,
            frustumSize / 2,
            (frustumSize * aspectRatio) / 2,
            (-frustumSize * aspectRatio) / 2,
            -100,
            100,
          ),
    [],
  )
  const velocity = Math.PI / 20
  const renderer = useMemo(
    () => new THREE.WebGLRenderer({ alpha: true, antialias: true }),
    [],
  )
  const render = () => renderer.render(scene, camera)
  const request = useRef()
  const mousedownEvent = (e) =>
    raycastMouseDown(e, camera, scene, setClickOnSphere, setStartPoint)
  const mouseUpEvent = () => {
    setClickOnSphere(false)
    setStartPoint({ x: 0, y: 0 })
  }
  const mouseMoveEvent = (e) => {
    mouseMove(e, clickOnSphere, startPoint, setStartPoint, meshes.current)
  }
  const resizeEvent = () => {
    resize(camera, renderer)
  }
  useEffect(() => {
    // renderer.setClearColor()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio * 1.5)
    globeCanvas.current.appendChild(renderer.domElement)
    initialCamera(camera)
    initLights(scene)
    createGlobe(scene, meshes.current, setLoading)
    initRings(scene)
    // drawLines(scene)
    window.addEventListener('mousedown', mousedownEvent)
    window.addEventListener('touchstart', mousedownEvent)
    window.addEventListener('mouseup', mouseUpEvent)
    window.addEventListener('touchend', mouseUpEvent)
    window.addEventListener('resize', resizeEvent)
    return () => {
      cancelAnimationFrame(request.current)
      window.removeEventListener('mousedown', mousedownEvent)
      window.removeEventListener('touchstart', mousedownEvent)
      window.removeEventListener('mouseup', mouseUpEvent)
      window.removeEventListener('touchend', mouseUpEvent)
      window.removeEventListener('resize', resizeEvent)
    }
  }, [])
  useEffect(() => {
    if (location.pathname == '/') {
      window.addEventListener('mousemove', mouseMoveEvent)
      document
        .getElementById('globecanvas')
        .addEventListener('touchmove', mouseMoveEvent)

      cancelAnimationFrame(request.current)
      let time = new Date().getTime()
      const animate = () => {
        request.current = requestAnimationFrame(animate)
        if (!clickOnSphere) {
          let dt = (new Date().getTime() - time) / 1000
          time = new Date().getTime()
          meshes.current.rotateOnWorldAxis(yAxis, velocity * dt)
        }
        render()
      }
      request.current = requestAnimationFrame(animate)
      return () => {
        window.removeEventListener('mousemove', mouseMoveEvent)
        if (
          document.getElementById('globecanvas') &&
          document.getElementById('globecanvas').length > 0
        ) {
          document
            .getElementById('globecanvas')
            .removeEventListener('touchmove', mouseMoveEvent)
        }
        // if (window.location.href.split('#/') == '/') {
        // }
      }
    }
  }, [startPoint, clickOnSphere])
  return (
    <>
      {/* {' '}
         {' '}
      {loading ? (
        <div id="loading">Texture Loading ...</div>
      ) : (
        <>
          {' '}
                  <div id="git">github.com/dariush-hassani</div>        {' '}
          <div id="drag">Drag on globe to rotate it</div>      {' '}
        </>
      )}{' '}
           */}
      <div id="globecanvas" ref={globeCanvas}></div>  {' '}
    </>
  )
}

export default Globe
