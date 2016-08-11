import {Component, ChangeDetectionStrategy} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HiphopTugaService, IArtist} from '../../services/hiphop-tuga.service';
import {Control} from '@angular/common';
import {Observable} from "rxjs/Observable";
import {OrderByPipe} from '../../pipes/sort.pipe';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: 'build/pages/popularity/popularity.html',
  providers: [HiphopTugaService],
  pipes: [OrderByPipe],
})
export class PopularityPage {

  artists: Observable<Array<string>>;
  constructor(private navCtrl: NavController, private hiphopTugaService: HiphopTugaService ) {

  }

  initializeItems() {
    this.hiphopTugaService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    console.log('Popularity page!');
    this.initializeItems();
  }
}
