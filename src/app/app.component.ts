import { Component } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libreStart-Client';
  serverUrl = 'http://localhost:8080/';


  constructor(private broadcastService: BroadcastService, private authService: MsalService) {}


 ngOnInit() {
  
  
}

ngOnDestroy() {
 
}

  
}

