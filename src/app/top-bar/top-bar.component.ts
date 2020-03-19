import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Feather.replace();
  }
}

