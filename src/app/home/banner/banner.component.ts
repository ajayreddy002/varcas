import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: true,
    autoWidth: false,
    margin: 30,
    items: 3,
    responsive: {
      0: {
        items: 3,
      },
      1000: {
        items: 1,
      },
      800: {
        items: 2
      },
      600: {
        items: 1,
      },
      300:{
        items: 1
      }
    },
    nav: false
  }

  testiData = [
    {
      id: '01',
      img: 'quote.png',
      text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.'
    },
    {
      id: '02',
      img: 'about.jpeg',
      text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.'
    },
    {
      id: '03',
      img: 'add-bg.jpeg',
      text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.'
    },

  ]

  // slides = [
  //   {id: '01', img: "https://dummyimage.com/350x150/423b42/fff"},
  //   {id: '02', img: "https://dummyimage.com/350x150/2a2b7a/fff"},
  //   {id: '03', img: "https://dummyimage.com/350x150/1a2b7a/fff"},
  //   {id: '04', img: "https://dummyimage.com/350x150/7a2b7a/fff"},
  //   {id: '05', img: "https://dummyimage.com/350x150/9a2b7a/fff"},
  //   {id: '06', img: "https://dummyimage.com/350x150/5a2b7a/fff"},
  //   {id: '07', img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  // ];

  constructor() { }

  ngOnInit(): void {
  }



}
