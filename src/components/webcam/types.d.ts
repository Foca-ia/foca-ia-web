/// <reference types="react" />
export declare type FacingMode = "user" | "environment";
export declare type AspectRatio = "cover" | number;
export declare type Stream = MediaStream | null;
export declare type SetStream = React.Dispatch<React.SetStateAction<Stream>>;
export declare type SetNumberOfCameras = React.Dispatch<
  React.SetStateAction<number>
>;
export interface CameraProps {
  facingMode?: FacingMode;
  aspectRatio?: AspectRatio;
  numberOfCamerasCallback?(numberOfCameras: number): void;
}
export declare type CameraType = React.ForwardRefExoticComponent<
  CameraProps & React.RefAttributes<unknown>
> & {
  takePhoto(): string;
  switchCamera(): FacingMode;
  getNumberOfCameras(): number;
};
