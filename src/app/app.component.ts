import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private _auth_service: AuthService,
    private navCtrl: NavController,
    private menu: MenuController
  ) {
    this._auth_service.checkIsAuth().subscribe((user) => {
      if (user) {
        localStorage.setItem('idUser', user.uid);
        this.navCtrl.navigateRoot('/tabs');
      } else {
        this.navCtrl.navigateRoot('/');
      }
    });
  }

  logout() {
    this._auth_service.logout();
    this.menu.enable(false, 'first');
  }
}
