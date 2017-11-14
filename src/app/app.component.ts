import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Diagnostic } from '@ionic-native/diagnostic';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, diag: Diagnostic) {
    platform.ready().then(() => {
      statusBar.hide();
      splashScreen.hide();
      diag.getLocationAuthorizationStatus().then(() => console.log("OK"),() => console.log("Pas d'authorisation"));
    });
  }
}

