// WebcamComponent.tsx
import React from "react";
import Webcam from "react-webcam";

interface WebcamComponentProps {
  width?: number;
  height?: number;
}

const WebcamComponent: React.FC<WebcamComponentProps> = ({
  width = 640,
  height = 480,
}) => {
  const webcamRef = React.useRef<Webcam>(null);

  return <Webcam ref={webcamRef} width={width} height={height} />;
};

export default WebcamComponent;
