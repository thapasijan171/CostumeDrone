import { useEffect, useRef } from "react"
import { ContainerScene } from "./Scene.elements"
import {
  cleanUpScene,
  initScene,
  loadGroups,
  loadModels,
} from "./Script"

const Scene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    initScene(mountRef)
    loadGroups()
    loadModels("./model/base/Base.gltf", "base")
    loadModels("./model/motor/Motor1.gltf", "motor")
    loadModels("./model/cam/Cam1.gltf", "camaras")
    loadModels("./model/helices/Helice1.gltf", "helices")

    return () => {
      cleanUpScene()
    }
  }, [])

  return (
    <ContainerScene
      className="SceneContainer"
      ref={mountRef}
    ></ContainerScene>
  )
}

export default Scene
