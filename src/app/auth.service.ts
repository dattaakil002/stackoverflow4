import { HttpClient } from '@angular/common/http';

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $userid = new EventEmitter();

  url: string = 'https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(this.url);
  }

  // individualuser(id){
  //   this.$userid.emit(id);
  // }
}
