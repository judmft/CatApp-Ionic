import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private splashScreen: SplashScreen) {

    

  // this.splashScreen.hide();
  }

  ngOnInit() {
    this.splashScreen.show();
  }

  

}
