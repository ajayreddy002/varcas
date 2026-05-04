import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.innerWidth < 658) {
      this.isSticky = true;
    } else {
      this.isSticky = window.pageYOffset >= 150;
    }
  }

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    if (window.innerWidth < 658) {
      this.isSticky = true;
    }
  }

}
