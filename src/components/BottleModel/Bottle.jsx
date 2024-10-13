'use client';
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Center } from '@react-three/drei';



function Bottle() {
  const modelRef = useRef();
  const { scene } = useGLTF('/assets/3dModels/mainBottle.gltf'); // Укажите путь к вашей .gltf модели


  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.material.transparent = true; // Убедись, что материал прозрачный
        object.material.opacity = 1; // Оставляем полную непрозрачность
        object.material.roughness = 0; // Гладкая поверхность
        object.material.metalness = 0; // Минимум металлического блеска
        object.material.transmission = 1; // Имитация стекла
      }
    });
  }, [scene]);

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        console.log(object.material.map); // Посмотри, есть ли карта текстуры
      }
    });
  }, [scene]);

  return (
    <Canvas style={{ height: '100vh', width: '100%' }}>
    <Center>
      {/* Управление камерой */}
    <OrbitControls enableZoom={true} />
    
    {/* Свет */}
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />

    {/* Сама модель */}
    <primitive object={scene} scale={1} />
    
    {/* Окружение */}
    {/* <Environment preset="sunset" /> */}
    </Center>
  </Canvas>
  );
}

export default function RotatingBottle() {
  return (
   
     
      <Bottle />

     
    
  );
}
