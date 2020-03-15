import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators";
import { GlobalConstants } from './common/global-constants';

import { fromEventPattern } from 'rxjs';
var IDToken = "";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, headers: HttpHeaders) {

  }

  getUser(userID){

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', "fixme");

      this.http.get(GlobalConstants.apiURL + "/api/user/users/" + JSON.stringify(userID), {headers: { Authorization: IDToken}})
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });

  }

  createTodo(todo){

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', "fixme");

      this.http.post(GlobalConstants.apiURL, JSON.stringify(todo), {headers: { Authorization: IDToken}})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });

    });

  }

  deleteTodo(id){

    return new Promise((resolve, reject) => {

        let headers = new Headers();
        headers.append('Authorization', "fixme");

        this.http.delete(GlobalConstants.apiURL + id, {headers: { Authorization: IDToken}}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });    

    });

  }

}

