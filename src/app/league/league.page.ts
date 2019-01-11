import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
})
export class LeaguePage {

  constructor(private _navCtrl: NavController) { }

  onPage() {//page: string
    this._navCtrl.navigateForward('team');
  }

}
