import { Float, PerspectiveCamera, useScroll, Stars } from "@react-three/drei";
import { TextSection } from "./TextSection";
import { Group, Vector3 } from "three";
import { Background } from "./Background";
import { N1 } from "./N1";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Ast } from "./Ast";
import { Ast2 } from "./Ast2";
import { Ast3 } from "./Ast3";
import { useMemo } from "react";



const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 42;

export const Experience = () => {

  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
    ],
    []
  );

  // const sceneOpacity = useRef(0);
  // const lineMaterialRef = useRef();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      curvePoints,
      false,
      "catmullrom",
      0.5
    );
  }, []);


  const textSections = useMemo(() => {
    return [


      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[1].x - 5,
          curvePoints[1].y+3,
          curvePoints[1].z+250,
        ),
        subtitle: "Start Scrolling to Enter the journey",
        
      },

      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[1].x - 3,
          curvePoints[1].y,
          curvePoints[1].z
        ),
        title: "Hello There",
        subtitle: ` Sit tight and Learn about the N1 and Mando !`,
      },
      {
        cameraRailDist: 1.5,
        position: new Vector3(
          curvePoints[2].x + 2,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        title: "Iconic Naboo Starfighter",
        subtitle: `The N1 Starfighter, also known as the Naboo Fighter, is a sleek and agile spacecraft from the Star Wars universe!`,
      },
      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[3].x - 5,
          curvePoints[3].y,
          curvePoints[3].z
        ),
        title: "Legendary Bounty Hunter",
        subtitle: `The Mandalorian is a mysterious and formidable bounty hunter hailing from the Mandalore system. `,
      },
      {
        cameraRailDist: 1.5,
        position: new Vector3(
          curvePoints[4].x + 2.5,
          curvePoints[4].y,
          curvePoints[4].z - 12
        ),
        title: "Elegant Design, Deadly Performance",
        subtitle: `The N1 Starfighter, favored by Queen Amidala, boasts a sleek chrome-plated hull, twin ion engines, and formidable laser cannons.`,
      },
      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[4].x -35,
          curvePoints[4].y,
          curvePoints[4].z - 126
        ),
        title: "Fearless and Enigmatic Warrior",
        subtitle: `The Mandalorian, with a stoic demeanor and hidden identity behind the iconic helmet, is a battle-hardened warrior skilled in combat and marksmanship`,
      },

      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[4].x -92,
          curvePoints[4].y,
          curvePoints[4].z - 226
        ),
        title: "The One You Are Driving",
        subtitle: `is the iconic N1 Starfighter that was used by the Mandalorian named Din Djarin`,
      },

      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[4].x -111,
          curvePoints[4].y,
          curvePoints[4].z - 326
        ),
        title: "This Great Experience",
        subtitle: `Was possible by Using Three.js , GSAP and Drei LIbrary`,
      },

      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[4].x -99,
          curvePoints[4].y-1,
          curvePoints[4].z - 526
        ),
        title: "You're Almost at the End of the Journey",
        
      },



      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[4].x -103,
          curvePoints[4].y,
          curvePoints[4].z - 751
        ),
        title: "End of the Journey",
        subtitle: `Thank You For Staying until the end of the journey`,
      },

      


    ];
  }, []);



  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  // const { play, setHasScroll, end, setEnd } = usePlay();


  useFrame((_state, delta) => {

    // if (window.innerWidth > window.innerHeight) {
    //   // LANDSCAPE
    //   cameraGroup.current.fov = 30;
    //   cameraGroup.current.position.z = 5;
    // } else {
    //   // PORTRAIT
    //   cameraGroup.current.fov = 80;
    //   cameraGroup.current.position.z = 2;
    // }

    // if (lastScroll.current <= 0 && scroll.offset > 0) {
    //   setHasScroll(true);
    // }

    // if (play && !end && sceneOpacity.current < 1) {
    //   sceneOpacity.current = THREE.MathUtils.lerp(
    //     sceneOpacity.current,
    //     1,
    //     delta * 0.1
    //   );
    // }

    // if (end && sceneOpacity.current > 0) {
    //   sceneOpacity.current = THREE.MathUtils.lerp(
    //     sceneOpacity.current,
    //     0,
    //     delta
    //   );
    // }

    // lineMaterialRef.current.opacity = sceneOpacity.current;

    // if (end) {
    //   return;
    // }

    const lerpedScrollOffset = Math.max(0, scroll.offset);

    let friction = 1;
    let resetCameraRail = true;

    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        cameraGroup.current.position
      );

      if (distance < FRICTION_DISTANCE) {
        friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
        const targetCameraRailPosition = new Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });

    if (resetCameraRail) {
      const targetCameraRailPosition = new Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

        // CALCULATE LERPED SCROLL OFFSET
    let lerpedlerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      lerpedScrollOffset,
      delta * friction
    );
    
    lerpedlerpedScrollOffset = Math.min(lerpedlerpedScrollOffset, 1);
    lerpedlerpedScrollOffset = Math.max(lerpedlerpedScrollOffset, 0);

    lastScroll.current = lerpedlerpedScrollOffset;


    const curPoint = curve.getPoint(lerpedScrollOffset);

    
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    

    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; 

    
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);

    // if (
    //   cameraGroup.current.position.z <
    //   curvePoints[curvePoints.length - 1].z + 100
    // ) {
    //   setEnd(true);
    //   planeOutTl.current.play();
    // }
    
  });

  const airplane = useRef();




  return useMemo(() => (
    <>
      {/* <OrbitControls enableZoom={false}/> */}

        <group ref={cameraGroup}>

          
        <Background/>

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
      
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />
        
        <group ref={cameraRail}>
        <PerspectiveCamera position={[0, 0, 10]} fov={40} makeDefault/>
        </group>
        
          <group ref={airplane}>
            

          
            <Float floatIntensity={1} speed={2} rotationIntensity={0.8}>
              <N1  
              // rotation-y={Math.PI / 2}
              scale={[0.1, 0.1, 0.1]}
              position-y={-0.1}
              
              />
            </Float>
            
          </group>
        </group>


      {/* TEXT */}
      {textSections.map((textSection, index) => (
        <TextSection {...textSection} key={index} />
      ))}

      <group position-y={-4}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"}
          //  ref={lineMaterialRef} 
          opacity={0.1}
           transparent />
        </mesh>
      
      </group>

      <Ast  scale={[0.2, 0.3, 0.4]} position={[-10, 2, -10]} />
      <Ast2  scale={[4, 4, 4]} position={[150, -8, -590]} />

      <Ast2  scale={[4, 4, 4]} position={[150, -8, -1590]} />
      <Ast2  scale={[4, 4, 4]} position={[150, -8, -2590]} />
      <Ast2  scale={[4, 4, 4]} position={[150, -8, -1990]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 2} position={[-108, -8, -290]} />

      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 2} position={[-108, -8, -390]} />

      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 2} position={[88, -8, -490]} />

      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 2} position={[38, -8, -340]} />

      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 6} rotation-x={Math.PI } position={[-108, -8, -990]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 7} position={[108, -8, -690]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 2} position={[-108, -8, -740]} />

      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 2} position={[108, -8, -940]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 2} position={[148, -8, -1040]} />      
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 2} position={[-108, -8, -1440]} />

      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 8} position={[-28, -8, -1990]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 8} position={[-38, -8, -1290]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 8} position={[24, -8, -1390]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 8} position={[-28, -8, -190]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 8} position={[-8, -48, -1890]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 8} position={[-8, -8, -1790]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 8} position={[-8, -8, -2990]} />
      <Ast3  scale={[1.2, 1.5, 1.6]} rotation-y={Math.PI / 3} rotation-x={Math.PI / 8} position={[-108, -8, -2190]} />


      <Ast  scale={[1.2, 0.5, 0.6]} position={[18, -1, -50]} />
      <Ast  scale={[0.8, 0.5, 0.6]} position={[9, -1, -20]} />
      <Ast  scale={[0.3, 0.5, 0.6]} position={[12, -1, -80]} />
      <Ast  scale={[1, 0.5, 0.6]} position={[14, -1, 0]} />
      <Ast  scale={[0.6, 0.5, 0.6]} position={[10, -1, -550]} />
      <Ast  scale={[1, 1, 1]} position={[11, -1, 20]} />
      <Ast  scale={[0.9, 0.98, 0.6]} position={[14, -1, -680]} />
      <Ast  scale={[0.7, 0.10, 0.6]} position={[17, -1, -390]} />

    </>
  ),[]);
};
