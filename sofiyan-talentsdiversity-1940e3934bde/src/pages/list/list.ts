import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { EntreprisePage } from '../entreprise/entreprise';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  key: string;
  myKey: string;
  tableauFinal: Array<Object> = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    // Récupération de la région
    this.key = this.navParams.data;
    let objKey = this.key;
    this.myKey = objKey[Object.keys(objKey)[0]];
    console.log(this.myKey);
    this.dataService.getDatas().subscribe(data =>{
      console.log(data);
      // Parcoursdu tableau de données affichage
      for (let i=0; i<data.length; i++){
        if (data[i]["Région"] === this.myKey){
          this.tableauFinal.push(data[i]);
        }
      }
    });
  }

  itemSelected(item){
    this.navCtrl.push(EntreprisePage, {
      passed: item
    });
  }

}
