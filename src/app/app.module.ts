import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: "7881dbcd-75f4-4a46-9cc0-ce779b177ab3",
      protectedResourceMap: [
        ['https://mycoolservice.com/places', ['https://mycoolservice.onmicrosoft.com/places-admin-service/user_impersonation']],
        ['https://mycoolservice.com/partners', ['https://mycoolservice.onmicrosoft.com/partners-admin-service/user_impersonation']],    
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
        // ['http://localhost:8080', ['user.read']]
      ] as [string, string[]][],
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "http://localhost:4200/",
      consentScopes: ["https://graph.microsoft.com/.default"],
      popUp: false,
      correlationId: '1234',
      level: 1,
      piiLoggingEnabled: true
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
