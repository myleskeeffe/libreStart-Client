import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { BroadcastService, MsalService } from '@azure/msal-angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private broadcastService: BroadcastService, private authService: MsalService) {console.log(this.userData)}

  //
  userData = this.authService.getUser();
  loggedIn;

  ngOnInit() {
    
  }



}
