import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-begineer',
  templateUrl: './begineerpage.component.html',
  styleUrls: ['./begineerpage.component.css'],
  animations: [
    trigger('EnterLeave', [

      transition(':enter', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ]),
      // transition(':leave', [
      //   animate('0.5s ease-out', style({ transform: 'translateY(100%)' }))
      // ])
    ])
  ]
})
export class BegineerComponent implements OnInit {
  begineerproducts: Array<any> = [];
  selectedproducts: Array<any> = [];
  selection: String;
  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    this.productservice.getBegineerProducts().subscribe(res => {
      this.begineerproducts = res.post;
      //console.log('beginners', this.begineerproducts)
    })
  }
  scroll() {
    document.querySelector('#product-display').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  //function
  loadData(selection: String) {
    this.selectedproducts = [];
    this.selection = selection;

    var i: any;

    for (i = 0; i < this.begineerproducts.length; i += 1) {
      if (this.selection == this.begineerproducts[i].sub_category) { this.selectedproducts.push(this.begineerproducts[i]); }
    }

    console.log('selected', this.selectedproducts);
  }
  playAudio() {
    let audio = new Audio();
    audio.src = "/assets/audios/song.mp3";
    audio.load();
    audio.play();
  }

}
