import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const regEndpoint = GlobalConstants.apiURL;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private broadcastService: BroadcastService, private authService: MsalService, private http: HttpClient) {}

  //
  userData = this.authService.getUser();
  loggedIn;
  profile;
  endPoint1;
  accessToken;

  ngOnInit() {
    this.getProfile();
    let myItem = sessionStorage.getItem("msal.idtoken");
    this.getApi();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .toPromise().then(profile => {
        this.profile = profile;
      });
  }

  getApi() {
    this.http.get("http://localhost:8080/api/user/prefs/", {headers: {Authorization:"Bearer " + sessionStorage.getItem("msal.idtoken")}})
    .toPromise().then(endPoint1 => {
      this.endPoint1 = endPoint1;
    })
  }


}
