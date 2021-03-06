import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';
import { NoticiaService } from '../../service/noticia.service';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  public noticias: Noticia[]= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public noticiasService: NoticiaService) {
   
    this.noticiasService.getNoticias()
    .subscribe(respose => {
      console.log(respose);
      this.noticias=respose; 
    })

  }

  detalheNoticia(id: string){
    this.navCtrl.push('DetalheNoticiaPage',{'id': id});
  }

}
