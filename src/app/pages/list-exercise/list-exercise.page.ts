import { Component, OnInit } from '@angular/core';
import { ListExerciseService } from '../../services/list-exercise.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.page.html',
  styleUrls: ['./list-exercise.page.scss'],
})
export class ListExercisePage implements OnInit {
  name: string = '';
  exercises = [];
  constructor(
    private _list: ListExerciseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    let idCat = this.route.snapshot.paramMap.get('key');
    this._list.getListCat(idCat).then((snapshot) => {
      snapshot.forEach((snap) => {
        this.exercises.push(snap.data());
      });
    });
  }

  goPage(route, param) {
    this.router.navigate([`/${route}`], { state: { data: param } });
  }
}
