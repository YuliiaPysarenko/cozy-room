import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrthographicCamera, Stage } from "@react-three/drei";
import { Perf } from "r3f-perf";
import CozyRoom from "./components/CozyRoom.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas shadows>
    <OrthographicCamera
      makeDefault
      position={[6, 3, 6]}
      near={0.1}
      far={1000}
    />
    <Perf position="top-left" />

    <directionalLight castShadow position={[-0.5, 5.9, 3.9]} intensity={0.5} />
    <Stage
      key={window.innerWidth}
      adjustCamera={1.1}
      shadows={false}
      environment={null}
      intensity={1}
    >
      <Bounds fit clip observe margin={1.2}>
        <CozyRoom />
      </Bounds>
    </Stage>
  </Canvas>,
);
