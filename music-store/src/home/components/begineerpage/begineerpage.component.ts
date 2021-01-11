import { TutorialComponent } from './../tutorial/tutorial.component';
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
  audio = new Audio();

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
  loadData(selection: String,el: HTMLElement) {
   
    this.selectedproducts = [];
    this.selection = selection;

    //creating obj and calling function


    var i: any;

    for (i = 0; i < this.begineerproducts.length; i += 1) {
      if (this.selection == this.begineerproducts[i].sub_category) { this.selectedproducts.push(this.begineerproducts[i]); }
    }
    
    this.playAudio(this.selection);
    let ob=new TutorialComponent();
    ob.loadTutorials(this.selection);
  
 
 
    el.scrollIntoView({behavior: 'smooth'});
  

  }
  playAudio(selection:String) {

  
    if(selection=='Guitar')
    this.audio.src = "/assets/audios/guitar.mp3";
    else if(selection=='Keyboard')
    this.audio.src = "/assets/audios/keyboard.mp3";
    else if(selection=='Tabla')
    this.audio.src = "/assets/audios/tabla.mp3";
    else if(selection=='Flute')
    this.audio.src = "/assets/audios/flute.mp3";
    this.audio.load();
    this.audio.play();
  }


  
  //   scroll(el: HTMLElement) {
  //     el.scrollIntoView({behavior: 'smooth'});
  // }
}


