/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 ast3.glb
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asteroids-pack-metallic-version-eff495d9315c47dbb2777ec80bef40d8
Title: Asteroids Pack (metallic version)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ast3(props) {
  const { nodes, materials } = useGLTF('/models/n1/ast3.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[13.067, -0.002, 13.62]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_1_Material_#3_0'].geometry} material={materials.Material_3} position={[-13.067, 13.62, 0.002]} />
      </group>
      <group position={[-0.243, -0.031, -28.589]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_10_Material_#3_0'].geometry} material={materials.Material_3} position={[0.243, -28.589, 0.031]} />
      </group>
      <group position={[-13.875, -0.012, -14.463]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_9_Material_#3_0'].geometry} material={materials.Material_3} position={[13.875, -14.463, 0.012]} />
      </group>
      <group position={[-0.808, 0.013, -14.437]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_8_Material_#3_0'].geometry} material={materials.Material_3} position={[0.808, -14.437, -0.013]} />
      </group>
      <group position={[12.427, -0.004, -14.44]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_7_Material_#3_0'].geometry} material={materials.Material_3} position={[-12.427, -14.44, 0.004]} />
      </group>
      <group position={[-13.327, -0.054, 0.133]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_6_Material_#3_0'].geometry} material={materials.Material_3} position={[13.327, 0.133, 0.054]} />
      </group>
      <group position={[-0.293, -0.025, 0.144]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_5_Material_#3_0'].geometry} material={materials.Material_3} position={[0.293, 0.144, 0.025]} />
      </group>
      <group position={[12.945, 0.008, 0.103]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_4_Material_#3_0'].geometry} material={materials.Material_3} position={[-12.945, 0.103, -0.008]} />
      </group>
      <group position={[-13.204, 0.026, 13.617]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_3_Material_#3_0'].geometry} material={materials.Material_3} position={[13.204, 13.617, -0.026]} />
      </group>
      <group position={[-0.128, 0.004, 13.657]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Asteroid_no_2_Material_#3_0'].geometry} material={materials.Material_3} position={[0.128, 13.657, -0.004]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/n1/ast3.glb')