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

  public chamado: Chamado = { id: 0 };
  public chamados: Chamado[] = [];

  constructor(
    private apiService: ApiService,
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
        this.chamados = data
      });
    } catch (error) {
      console.error(error);
    }
  }


  detailsCall(id: number) {
    this.apiService.searchById(id).subscribe(data => {
      this.chamado = data;
      console.log(this.chamado);
      if (this.chamado) {
        this.navController.navigateForward(['chamadoatualizar'], {
          queryParams: {
            chamado: JSON.stringify(this.chamado)
          }
        });
      }
    });
  }
  deleteCall(id: number) {
    this.apiService.deleteCall(id).subscribe(
      (data) => {
        console.log("Chamado deletado:", data);
        window.location.reload();
      },
      (error) => {
        console.error("Erro ao deletar chamado:", error);

      }
    );
  }

}
