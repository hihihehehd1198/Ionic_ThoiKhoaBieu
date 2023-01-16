import { Injectable } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';


export interface UserPhoto {
  filepath: string;
  webviewPath: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }
  public photos: UserPhoto[] = [];

  public async addNewPhotoGallery() {
    const capturedphoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 1000
    })

    this.photos.unshift({
      filepath: 'soon ',
      webviewPath: capturedphoto?.webPath
    })

  }
}
