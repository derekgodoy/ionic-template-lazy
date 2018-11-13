import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';

@IonicPage()
@Component({
  selector: 'page-detalhe-noticia',
  templateUrl: 'detalhe-noticia.html',
})
export class DetalheNoticiaPage {

  noticia: Noticia;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.noticia=this.navParams.get('noticia');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheNoticiaPage');
  }

}
