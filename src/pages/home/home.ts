import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public deploy: Deploy) {

  }
  ngOnInit() {
    this.performManualUpdate();
  }

  async performManualUpdate() {
    const update = await this.deploy.checkForUpdate()
    if (update.available){
      window.alert(update);
      
      window.alert("yessssssssa!!!");
      
    }
   }

}
