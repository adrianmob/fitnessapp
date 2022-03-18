import { Component, OnInit } from '@angular/core';
import { EntrenamientosService } from '../../services/entrenamientos.service';
import SwiperCore, { Scrollbar, Pagination, Navigation } from 'swiper';
SwiperCore.use([Scrollbar, Pagination, Navigation, IonicSlides]);
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage implements OnInit {
  lunes = [];
  martes = [];
  miercoles = [];
  jueves = [];
  viernes = [];
  sabados = [];
  domingos = [];

  constructor(
    private _entrenamiento: EntrenamientosService,
    private router: Router
  ) {}

  ngOnInit() {
    let idUser = localStorage.getItem('idUser');
    this._entrenamiento.getCategories(idUser).then((snapshot) => {
      let data = snapshot.data();
      console.log(data);
      this.lunes = data.lunes.map((lunes) => lunes);
      this.martes = data.lunes.map((martes) => martes);
      this.miercoles = data.miercoles.map((miercoles) => miercoles);
      this.jueves = data.jueves.map((jueves) => jueves);
      this.viernes = data.viernes.map((viernes) => viernes);
      this.sabados = data.sabados.map((sabados) => sabados);
      this.domingos = data.domingos.map((domingos) => domingos);
    });
  }

  goPage(route, param) {
    this.router.navigate([`/${route}`], { state: { data: param } });
  }
}
