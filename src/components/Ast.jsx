/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 ast.glb
Author: Azure Rod (https://sketchfab.com/AzureRod)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asteroids-fa31d509052d4c7f803fb9c4df91b89b
Title: Asteroids
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ast(props) {
  const { nodes, materials } = useGLTF('/models/n1/ast.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Pedra1} position={[-0.898, -0.276, 0.023]} rotation={[-1.882, 0.093, -1.707]} scale={1.166} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Pedra2} position={[3.98, 0.458, -0.037]} rotation={[1.778, -0.348, 0.026]} scale={1.097} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Pedra3} position={[-5.732, 0.922, -0.032]} rotation={[0.905, -0.656, 0.391]} scale={1.163} />
    </group>
  )
}

useGLTF.preload('/models/n1/ast.glb')
