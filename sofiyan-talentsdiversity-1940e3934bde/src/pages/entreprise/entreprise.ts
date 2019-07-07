import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entreprise',
  templateUrl: 'entreprise.html',
})
export class EntreprisePage {

  key: any;
  myKey: any;
  // Informations entreprise
  nom: string;
  domaine: string;
  adresse: string;
  ville: string;
  codePostal: string;
  site: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntreprisePage');
    // Récupération de la région
    this.key = this.navParams.data;
    let objKey = this.key;
    this.myKey = objKey[Object.keys(objKey)[0]];
    // Remplissage des données à afficher
    this.nom = this.myKey["Nom de la structure"];
    this.domaine = this.myKey["Domaine d'activité"]
    this.adresse = this.myKey["Adresse"]
    this.ville = this.myKey["Ville"]
    this.codePostal = this.myKey["Code Postal"]
    this.site = this.myKey["Site web"]
  }

}
