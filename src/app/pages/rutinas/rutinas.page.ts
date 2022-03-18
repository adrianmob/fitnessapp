import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Scrollbar, Pagination, Navigation } from 'swiper';
SwiperCore.use([Scrollbar, Pagination, Navigation, IonicSlides]);
import { IonicSlides, MenuController } from '@ionic/angular';
import { RutinasService } from '../../services/rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {
  categories = [];
  constructor(
    private router: Router,
    private _rutinas: RutinasService,
    private menu: MenuController
  ) {}

  ngOnInit() {
    this._rutinas.getCategories().then((snapshot) => {
      snapshot.forEach((snap) => {
        let snapshot = snap.data();
        this.categories.push({ name: snapshot.name, id: snap.id });
      });
      console.log(this.categories);
    });
  }

  goPage(route, param) {
    let ruta = param ? `/${route}/${param.id}/${param.name}` : `/${route}`;
    this.router.navigateByUrl(ruta);
  }
  mostrarMenu() {
    this.menu.enable(true, 'first');
    this.menu.open();
  }
}
