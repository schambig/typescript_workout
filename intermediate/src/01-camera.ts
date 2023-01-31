import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

const takePicture = async () => { // asyncronic function to capture a camera thanks to the capacitor
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
    direction: CameraDirection.Front
  });
};
