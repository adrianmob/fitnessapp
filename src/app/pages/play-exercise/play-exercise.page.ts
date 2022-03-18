import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PlayExerciseService } from '../../services/play-exercise.service';

@Component({
  selector: 'app-play-exercise',
  templateUrl: './play-exercise.page.html',
  styleUrls: ['./play-exercise.page.scss'],
})
export class PlayExercisePage implements OnInit {
  video;
  url;
  exist = false;
  constructor(
    private sanitizer: DomSanitizer,
    private _playService: PlayExerciseService
  ) {}

  ngOnInit() {
    console.log(history.state.data);
    this.video = history.state.data;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    if (this.video.complete !== undefined) this.exist = true;
    console.log(this.exist);
  }

  setComplete() {
    this.video.complete = true;
    this._playService.complete(this.video.id, this.video);
  }
}
