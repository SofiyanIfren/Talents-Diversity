import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  affichage: any;
  temp: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.dataService.getDatas().subscribe(data =>{
      // Parcours de mes datas  
      this.temp = [];   
      for (let i=0; i<data.length; i++){
        if (!this.temp.includes(data[i]["Région"]) && (data[i]["Région"] !== '')){
          this.temp.push(data[i]["Région"]);
        }
      } 
      this.affichage = this.temp.sort();
    });
  }

  // Pasage du paramètre a la page liste des entreprises
  itemSelected (item){
    this.navCtrl.push(ListPage, {
      passed: item
    });
    
  }

}
