import { Chamado } from './../chamado';
// chamado.page.ts
import { ToastController } from '@ionic/angular';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.page.html',
  styleUrls: ['./chamado.page.scss'],
})
export class ChamadoPage implements OnInit {

  public chamado:Chamado = {};

  constructor(
    private apiService: ApiService,
    private toastController: ToastController
  ) {
    this.criarChamado();
  }

  ngOnInit() {}

  async criarChamado() {
    try {
      const response = await this.apiService.createCall(this.chamado).toPromise();
      const jsonCall = JSON.stringify(response);
      console.log(jsonCall);
      this.mostrarToast('Chamado criado com sucesso');
    } catch (error) {
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
