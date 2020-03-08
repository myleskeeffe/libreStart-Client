import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators";


import { fromEventPattern } from 'rxjs';
var IDToken = "";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, headers: HttpHeaders) {

  }

  getTodos(){

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', "fixme");

      this.http.get('https://YOUR_HEROKU_APP.herokuapp.com/api/todos', {headers: { Authorization: IDToken}})
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

      this.http.post('https://YOUR_HEROKU_APP.herokuapp.com/api/todos', JSON.stringify(todo), {headers: { Authorization: IDToken}})
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

        this.http.delete('https://YOUR_HEROKU_APP.herokuapp.com/api/todos/' + id, {headers: { Authorization: IDToken}}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });    

    });

  }

}

