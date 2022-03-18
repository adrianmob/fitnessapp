import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cliente: string = '';
  password: string = '';

  constructor(
    public _auth_service: AuthService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  login() {
    this._auth_service
      .signInWithEmail(this.cliente, this.password)
      .then((auth) => {
        console.log(auth);
      })
      .catch(async (error) => {
        await this.presentToast();
      });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Error.',
      duration: 2000,
    });
    toast.present();
  }
}
