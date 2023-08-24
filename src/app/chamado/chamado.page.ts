import { async } from '@angular/core/testing';
import { Chamado } from './../chamado';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from './../service/api.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { ModalPage } from '../modal/modal.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.page.html',
  styleUrls: ['./chamado.page.scss'],
})
export class ChamadoPage {

  public chamado: Chamado = {
    id: 0,
    longitude: 0,
    latitude: 0
  };

  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  map!: GoogleMap;

  imageSource: any;

  constructor(
    private domSanitizer: DomSanitizer,
    private modalCtrl: ModalController,
    private apiService: ApiService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.ondeestou()
  }


  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      // resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      // saveToGallery: true
    });

    this.imageSource = 'data:image/jpe;base64,' + image.base64String;

    console.log(this.imageSource);

    // this.imageSource.DomSanitizer.bypassSecurityTrustUrl(image.webPath ? image.webPath : "")
  }

  // getPhoto() {
  //   return this.imageSource
  // }

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: this.chamado.latitude,
          lng: this.chamado.longitude,
        },
        zoom: 8,
      }
    });
    await this.addMarkers();

  }

  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat: this.chamado.latitude,
          lng: this.chamado.longitude,
        },
        title: 'localhost',
        snippet: 'Best place on earth',
      },
    ];

    const result = await this.map.addMarkers(markers);

    this.map.setOnMarkerClickListener(async (marker) => {

      const modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {
          marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();
    });

  }

  async ondeestou() {
    const printCurrentPosition = await Geolocation.getCurrentPosition();
    this.chamado.latitude = printCurrentPosition.coords.latitude;
    this.chamado.longitude = printCurrentPosition.coords.longitude;
  };

  async criarChamado() {
    try {
      this.apiService.createCall(this.chamado).subscribe(data => { });
      this.mostrarToast('Chamado criado com sucesso');
      this.router.navigate(['home']);
    }
    catch (error) {
      console.error('Erro ao criar o chamado:', error);
      this.mostrarToast('Erro ao criar o chamado');
    }
  }

  async mostrarToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
}
