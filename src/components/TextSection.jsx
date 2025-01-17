    import { Text } from "@react-three/drei";
    // import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";

    export const TextSection = ({ title, subtitle, ...props }) => {
    return (
        <group {...props}>
        {!!title && (
            <Text
            color="white"
            anchorX={"left"}
            anchorY="bottom"
            fontSize={0.52}
            maxWidth={2.5}
            lineHeight={1}
            font={"./fonts/m2.otf"}
            >
            {title}
            {/* <meshStandardMaterial
                color={"white"}
                onBeforeCompile={fadeOnBeforeCompileFlat}
            /> */}
            </Text>
        )}

        <Text
            color="white"
            anchorX={"left"}
            anchorY="left"
            fontSize={0.1}
            maxWidth={6.5}
            font={"./fonts/m2.otf"}
        >
            {subtitle}
            {/* <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
            /> */}
        </Text>
        </group>
    );
    };