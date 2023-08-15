import { Chamado } from './../chamado';
import { ApiService } from './../service/api.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public chamado:Chamado = {};
  public lista: Chamado[] = [];

  constructor(
    private apiService:  ApiService,
    private navController: NavController
  ) {
    this.listCall();
  }

  // Navegação de página
  showCall() {
    this.navController.navigateForward('chamado');
  }


  async listCall() {
    try {
      this.apiService.listcall().subscribe(data => {
        this.lista = data
      });
    } catch (error) {
      console.error(error);
    }
  }
}
