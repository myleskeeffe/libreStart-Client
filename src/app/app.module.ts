import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MsalModule } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: "ClientTenantID",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "http://localhost:4200/",
      consentScopes: [ "user.read", "ClientID/access_as_user"],
      popUp: false,
      correlationId: '1234',
      level: 1,
      piiLoggingEnabled: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
