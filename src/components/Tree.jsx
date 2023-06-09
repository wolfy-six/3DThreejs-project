/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 tree.gltf --transform
Author: olmopotums (https://sketchfab.com/olmopotums)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/patch-of-heaven-the-white-tree-c57f1d68456348238ecf40f80f3fb3be
Title: Patch of Heaven - The White Tree
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tree-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Mat_A} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Mat_B} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['01___Default']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['01___Default']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Mat_D} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Mat_E} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Mat_F} />
      </group>
    </group>
  )
}

useGLTF.preload('/tree-transformed.glb')
