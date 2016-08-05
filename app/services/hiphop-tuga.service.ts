import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export interface IArtist {
  id:string;
  name:string;
  email:string;
  address:string;
  phone:string;
}

@Injectable()
export class HiphopTugaService {

  constructor(private http:Http) {
  }

  getArtists() {

    // artists ids
    let valete = '32rAgIN6jhUQYhyoKa8agj',
        spDeville = '1wHB76zF5xN5iRX6Gcstsb',
        bossAC = '2AiLSd9HXwfFwO9g00s2hk',
        dealema = '2UCac8rxE1lJ1lQHhZ3l7I',
        samTheKid = '3NEQ5t2FprBMLmDAP0EPcE',
        halloween = '6Wwk1nYhTn8Rj4sbUo3a5N',
        dillaz = '15p1isN7VcGsjeSq8s9YeP';

    let artists = [];
    artists.push(valete, spDeville, bossAC, dealema, samTheKid, halloween, dillaz);

    let artistsString = artists.join(',');

    console.log(artistsString);

    let artistsUrl = 'https://api.spotify.com/v1/artists?ids=' + artistsString;

    return this.http
      .get(artistsUrl)
      .map((response) => response.json()['artists'])
  }
}// close class
