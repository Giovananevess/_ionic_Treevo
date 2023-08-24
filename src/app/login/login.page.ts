import { User } from '../interface/user';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {
    nome: '',
    email: '',
    password: '',
  };

  private loading: any;


  constructor(
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    public toastCtrl: ToastController,
    private router: Router) { }

  ngOnInit() {
  }


  public async login() {
    await this.presentLoading();
    try {
      await this.authService.login(this.userLogin);
      this.presentToast('Usuario logado com sucesso');
      this.router.navigate(['home']);
    } catch (error) {
      if (error instanceof Error) {
        let message: string;

        switch (error.message) {
          case 'auth/email-already-in-use':
            message = 'Email já está sendo usado.';
            break;

          default:
            message = 'Ocorreu um erro durante o login ';
            break;
        }

        this.presentToast(message);
      } else {
        this.presentToast('Ocorreu um erro durante o login');
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
