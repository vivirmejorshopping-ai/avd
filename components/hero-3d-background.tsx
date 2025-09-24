"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, MeshTransmissionMaterial } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function FloatingElements() {
  const sphereRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)

  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={sphereRef} position={[-4, 2, -2]} scale={0.8}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={3}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.2}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <mesh ref={torusRef} position={[4, -1, -1]} rotation={[0.5, 0.5, 0]}>
          <torusGeometry args={[1.2, 0.4, 16, 100]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.02}
            anisotropy={0.15}
            distortion={0.2}
            distortionScale={0.2}
            temporalDistortion={0.1}
            iridescence={0.8}
            iridescenceIOR={1.3}
            iridescenceThicknessRange={[0, 1000]}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[0, 3, -3]} scale={0.6}>
          <octahedronGeometry args={[1]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={1.5}
            chromaticAberration={0.03}
            anisotropy={0.2}
            distortion={0.15}
            distortionScale={0.15}
            temporalDistortion={0.3}
            iridescence={1.2}
            iridescenceIOR={1.5}
            iridescenceThicknessRange={[0, 800]}
          />
        </mesh>
      </Float>
    </>
  )
}

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ background: "transparent" }}>
        <Environment preset="studio" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#d4af37" />

        <FloatingElements />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
