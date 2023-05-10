import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  busy = false;
  message = '';
  constructor() { }

  async getPhoto() {
    try {
      this.busy = true;
      this.message = '';
      const result = await Camera.getPhoto({
        source: CameraSource.Photos,
        resultType: CameraResultType.Uri,
      });
      this.busy = false;
    }
    catch (error) {
      this.busy = false;
      this.message = error as string;
    }
  }
}
