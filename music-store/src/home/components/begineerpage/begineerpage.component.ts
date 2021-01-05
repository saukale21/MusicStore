import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begineer',
  templateUrl: './begineerpage.component.html',
  styleUrls: ['./begineerpage.component.css']
})
export class BegineerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "/assets/audios/song.mp3";
    audio.load();
    audio.play();
  }
 
}
