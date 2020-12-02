import React, { useRef } from "react";
import styles from "./App.module.css";
import Grid from "./Grid";
import { useGetViewport } from "./useGetViewport";

function App() {
  const { width } = useGetViewport();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <div className={styles.app}>
      <Grid
        defaultColor={"purple"}
        canvasRef={canvasRef}
        width={width! * 0.5}
        height={width! * 0.5}
      />
    </div>
  );
}

export default App;
