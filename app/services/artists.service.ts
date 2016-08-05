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
export class ArtistsService {

  constructor(private http:Http) {

    console.log('Artists Service');
  }

  search(term: string = '') {

    let usersUrl = 'https://api.spotify.com/v1/search?q=';
    //let usersUrl = 'http://api.randomuser.me/?results=5000'

    // if term is empty return an empty space because
    if(term == ''){
      term = ' ';
    }

    return this.http
      .get(usersUrl + term + '&type=artist')
      .map((request) => request.json()['artists']['items'])
  }
}// close class
