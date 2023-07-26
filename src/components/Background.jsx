    import { Environment, Sphere } from "@react-three/drei";
    import { Gradient, LayerMaterial } from "lamina";

    import * as THREE from "three";

    export const Background = () => {

        
    return (
        <>
            {/* <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
                    <LayerMaterial
                    color={"#ffffff"}
                    // lighting="physical"
                    // transmission={1}
                    side={THREE.BackSide}
                    >
                    <Gradient
                        colorA={"#1C002F"}
                        colorB={"#2E0051"}
                        axes={"y"}
                        start={0}
                        end={-0.5}
                    />
                    </LayerMaterial>
                </Sphere> */}

            <Environment resolution={256} background>
                <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
                    <LayerMaterial
                    color={"#ffffff"}
                    // lighting="physical"
                    // transmission={1}
                    side={THREE.BackSide}
                    >
                    <Gradient
                        colorA={"#1C002F"}
                        colorB={"#04265A"}
                        axes={"y"}
                        start={0}
                        end={-0.5}
                    />
                    </LayerMaterial>
                </Sphere>
            </Environment>    
        </>
    );
    };