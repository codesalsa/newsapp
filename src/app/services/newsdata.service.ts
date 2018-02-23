import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsdataService {

  constructor(public http:Http) {
    
  }

  getAllPosts(){
    return this.http.get('http://staging.latestodishanews.com/wp-json/wp/v2/posts')
    .map(res => res.json());
  }

}
