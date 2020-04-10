import { Component, OnInit } from '@angular/core';
import { animateSale } from '../SalesModule/Animations/Animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Fes - Dashboard';

  constructor() { }

  ngOnInit(): void {
  }

}
