import { NavController } from '@ionic/angular';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Chamado } from '../chamado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chamadoatualizar',
  templateUrl: './chamadoatualizar.page.html',
  styleUrls: ['./chamadoatualizar.page.scss'],
})
export class ChamadoatualizarPage implements OnInit {

  public chamado: Chamado = {
    id: 0,
    longitude: 0,
    latitude: 0
  };
  public chamados: Chamado[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private navController: NavController
  ) { }
  ngOnInit() {
    // this.listCall()
    this.route.queryParams.subscribe(params => {
      if (params['chamado']) {
        this.chamado = JSON.parse(params['chamado']);
        console.log(this.chamado);
      }
    });
  }
  async updateCall(id: number, chamado: Chamado) {
    try {
      this.apiService.updatecall(id, chamado).subscribe(data => {
        this.chamado = data;
        if (this.chamado) {
          this.navController.navigateForward('home');
        }
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
    }
  }
}

