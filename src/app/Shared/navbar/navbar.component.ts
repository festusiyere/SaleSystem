import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  productShow: boolean;
  salesShow: boolean;
  url: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routerSub();

  }

  routerSub() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      ).
      subscribe(
        (event) => {
          this.setActive(event['url']);
        }
      );
  }

  setActive(url: string) {

    if (url.includes('product')) {

      this.productShow = true;
      this.salesShow = false;

    } else if (url.includes('sales')) {

      this.productShow = false;
      this.salesShow = true;

    } else {

      this.productShow = false;
      this.salesShow = false;

    }
  }

  toggleProduct(event: Event) {
    this.productShow = !this.productShow;
  }

  toggleSale(event: Event) {
    this.salesShow = !this.salesShow;
  }

}
