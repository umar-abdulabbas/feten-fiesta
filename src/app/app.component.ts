import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit{

   
    ngOnInit() {
  }
    constructor(private router:Router){
      
    }

  navigate(){
      this.router.navigateByUrl('/about');
  }
}
