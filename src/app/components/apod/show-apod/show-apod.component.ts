import {Component, Input, OnInit} from '@angular/core';
import {ApodService} from "../../../services/apod.service";

let apiLoaded = false;

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit {
  @Input() apod: any;

  constructor() {
  }

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

  getYoutubeVideoId(): string {
    const youtubeIdRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = this.apod.url.match(youtubeIdRegex);
    if (!match || match[7].length !== 11) {
      return '';
    }
    return match[7];
  }
}
