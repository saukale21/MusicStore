import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-begineer',
  templateUrl: './begineerpage.component.html',
  styleUrls: ['./begineerpage.component.css']
})
export class BegineerComponent implements OnInit {
  begineerproducts: Array<any> = [];
  selectedproducts: Array<any> = [];
  selection: String;
  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    this.productservice.getBegineerProducts().subscribe(res=>{
        this.begineerproducts = res.post;
    })
  }

  //function

  playAudio(){
    let audio = new Audio();
    audio.src = "/assets/audios/song.mp3";
    audio.load();
    audio.play();
  }
 
}
