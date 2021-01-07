import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  guitar = {
    thumbnail1: 'http://i3.ytimg.com/vi/nYWzZ7BM8pA/hqdefault.jpg',
    video1: 'https://www.youtube.com/embed/nYWzZ7BM8pA',
    thumbnail2: 'http://i3.ytimg.com/vi/ffGjmz0jzWc/hqdefault.jpg',
    video2: 'https://www.youtube.com/embed/ffGjmz0jzWc',
    thumbnail3: 'http://i3.ytimg.com/vi/rTMN8rCBWkw/hqdefault.jpg',
    video3: 'https://www.youtube.com/embed/rTMN8rCBWkw'
  }
  tabla = {
    thumbnail1: 'http://i3.ytimg.com/vi/asx3wwdO178/hqdefault.jpg',
    video1: 'https://www.youtube.com/embed/asx3wwdO178',
    thumbnail2: 'http://i3.ytimg.com/vi/KfCYNFgZnVk/hqdefault.jpg',
    video2: 'https://www.youtube.com/embed/KfCYNFgZnVk',
    thumbnail3: 'http://i3.ytimg.com/vi/5l2N8uVKA4k/hqdefault.jpg',
    video3: 'https://www.youtube.com/embed/5l2N8uVKA4k'
  }
  flute = {
    thumbnail1: 'http://i3.ytimg.com/vi/m9pudD4FS5M/hqdefault.jpg',
    video1: 'https://www.youtube.com/embed/m9pudD4FS5M',
    thumbnail2: 'http://i3.ytimg.com/vi/lx3pIDowLZg/hqdefault.jpg',
    video2: 'https://www.youtube.com/embed/lx3pIDowLZg',
    thumbnail3: 'http://i3.ytimg.com/vi/GVeb3T72E_k/hqdefault.jpg',
    video3: 'https://www.youtube.com/embed/GVeb3T72E_k'
  }
  keyboard = {
    thumbnail1: 'http://i3.ytimg.com/vi/EPxqPw1N1Qk/hqdefault.jpg',
    video1: 'https://www.youtube.com/embed/EPxqPw1N1Qk',
    thumbnail2: 'http://i3.ytimg.com/vi/a_kVafB-0C4/hqdefault.jpg',
    video2: 'https://www.youtube.com/embed/a_kVafB-0C4',
    thumbnail3: 'http://i3.ytimg.com/vi/B7H7lOxnDQk/maxresdefault.jpg',
    video3: 'https://www.youtube.com/embed/B7H7lOxnDQk'
  }
  constructor() {
  
   }
  loadTutorials(category: String) {
   
    if (category == 'Guitar')
      this.setLinks(this.guitar)
      else if(category=='Tabla')
      this.setLinks(this.tabla)
      else if(category=='Flute')
      this.setLinks(this.flute)
      else 
      this.setLinks(this.keyboard)
  }

  setLinks(category: any) {
    (document.getElementById('thumbnail1') as HTMLImageElement).src = category.thumbnail1;
    (document.getElementById('videoLink1') as HTMLImageElement).src = category.video1;
    (document.getElementById('thumbnail2') as HTMLImageElement).src = category.thumbnail2;
    (document.getElementById('videoLink2') as HTMLImageElement).src = category.video2;
    (document.getElementById('thumbnail3') as HTMLImageElement).src = category.thumbnail3;
    (document.getElementById('videoLink3') as HTMLImageElement).src = category.video3;
  }
  ngOnInit(): void {
  }

}
