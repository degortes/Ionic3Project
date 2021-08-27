import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public deploy: Deploy) {

  }

  async performManualUpdate() {
    const update = await this.deploy.checkForUpdate()
    if (update.available){
      console.log(update);
      
      console.log("yessssssssa!!!");
      
    }
   }

}
