import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {
    nome: '',
    email: '',
    password: ''
  };
  private loading: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
      this.presentToast('Usuario criado com sucesso');
      this.router.navigate(['home']);
    } catch (error) {
      if (error instanceof Error) {
        let message: string;

        switch (error.message) {
          case 'auth/email-already-in-use':
            message = 'Email já está sendo usado.';
            break;

          case 'auth/invalid-email':
            message = 'Email inválido.';
            break;

          default:
            message = 'Erro ao realizar o registro.';
            break;
        }
        this.presentToast(message);
      }
    } finally {
      this.loading.dismiss();
    }
  }

  public async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message, duration: 2000
    });
    toast.present();
  }

}
