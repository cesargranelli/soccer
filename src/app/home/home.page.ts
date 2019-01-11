import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _navCtrl: NavController) { }

  onPage() {//page: string
    this._navCtrl.navigateForward('league');
  }

}
