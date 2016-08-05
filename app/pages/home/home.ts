import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HiphopTugaService} from "../../services/hiphop-tuga.service";
import {Control} from '@angular/common';
import {Observable} from "rxjs/Observable";
import {OrderBy} from '../../pipes/order-by';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [HiphopTugaService],
  pipes: [OrderBy]
})
export class HomePage {

  artists: Observable<Array<string>>;
  //term = new Control();

  constructor(private navCtrl: NavController, private hiphopTugaService: HiphopTugaService ) {
    //this.initializeItems();

   hiphopTugaService.getArtists()
      .debounceTime(400)
      .subscribe(artists => this.artists = artists;

    this.artists.filter(
      artist => artist.followers.total === this.artist.name);
    }
}

