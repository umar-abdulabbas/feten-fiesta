import { Component, Input, OnInit } from '@angular/core';
import {trigger, state, style, animate,  transition} from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],

})
export class FooterComponent implements OnInit {
 
  idx=1;
  
  footertxt = 'KLM/SKY TEAM Event 2018';

  constructor( private router:Router) { }

  ngOnInit() {
  }
  
  
}


